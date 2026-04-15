import React, { useState, useEffect } from 'react';
import { db, auth, storage } from '../firebaseConfig';
import { 
  collection, getDocs, addDoc, updateDoc, deleteDoc, 
  doc, query, orderBy, serverTimestamp 
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editId, setEditId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [newProject, setNewProject] = useState({ 
    title: '', category: 'Web Engineering', description: '', link: '', imageUrl: '' 
  });
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const msgQuery = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
      const projQuery = query(collection(db, "projects"), orderBy("createdAt", "desc"));
      const [msgSnapshot, projSnapshot] = await Promise.all([getDocs(msgQuery), getDocs(projQuery)]);
      setMessages(msgSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setProjects(projSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (err) { console.error("Fetch Error:", err); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const storageRef = ref(storage, `project-images/${Date.now()}-${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      null, 
      (error) => { 
        console.error(error); 
        setUploading(false); 
        alert("Upload failed. Check your Firebase Storage Rules!");
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setNewProject(prev => ({ ...prev, imageUrl: downloadURL }));
          setUploading(false);
        });
      }
    );
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    if (uploading) return alert("Please wait for image upload to finish!");

    try {
      if (editId) {
        await updateDoc(doc(db, "projects", editId), newProject);
        alert("Project updated!");
      } else {
        await addDoc(collection(db, "projects"), { ...newProject, createdAt: serverTimestamp() });
        alert("Project published!");
      }
      // Reset form
      setNewProject({ title: '', category: 'Web Engineering', description: '', link: '', imageUrl: '' });
      setEditId(null);
      fetchData();
    } catch (err) { console.error("Save Error:", err); }
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm("Delete this project permanently?")) {
      await deleteDoc(doc(db, "projects", id));
      fetchData();
    }
  };

  const startEdit = (p) => {
    setEditId(p.id);
    setNewProject({ 
      title: p.title, 
      category: p.category, 
      description: p.description, 
      link: p.link, 
      imageUrl: p.imageUrl || '' 
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectionStyle = {
    background: '#0f172a', padding: '30px', borderRadius: '24px',
    border: '1px solid rgba(251, 191, 36, 0.1)', marginBottom: '40px'
  };

  const inputStyle = {
    width: '100%', padding: '14px', margin: '10px 0', background: '#1e293b', 
    border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', color: 'white', outline: 'none'
  };

  return (
    <div style={{ padding: '120px 5% 60px 5%', color: 'white', maxWidth: '1400px', margin: '0 auto', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Console <span style={{ color: '#fbbf24' }}>Hub</span></h1>
          <p style={{ color: '#64748b' }}>Portfolio Management System</p>
        </div>
        <button onClick={() => signOut(auth).then(() => navigate('/login'))} style={{ background: '#ef4444', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: '800' }}>
          LOGOUT
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px' }}>
        
        {/* 1. PROJECT UPLOADER */}
        <section style={sectionStyle}>
          <h2 style={{ color: '#fbbf24', marginTop: 0 }}>{editId ? 'Edit Project' : 'New Project'}</h2>
          <form onSubmit={handleSaveProject}>
            <label style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 'bold' }}>PROJECT TITLE</label>
            <input style={inputStyle} value={newProject.title} onChange={(e) => setNewProject({...newProject, title: e.target.value})} required />
            
            <label style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 'bold' }}>HOMEPAGE SCREENSHOT</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} style={inputStyle} />
            
            {/* Image Preview Area */}
            {uploading && <p style={{ color: '#fbbf24', fontSize: '0.8rem', animation: 'pulse 1.5s infinite' }}>Uploading to Storage...</p>}
            {newProject.imageUrl && (
              <div style={{ marginBottom: '15px' }}>
                <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>PREVIEW:</p>
                <img src={newProject.imageUrl} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '8px', border: '2px solid #fbbf24' }} />
              </div>
            )}
            
            <label style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 'bold' }}>CATEGORY</label>
            <select style={inputStyle} value={newProject.category} onChange={(e) => setNewProject({...newProject, category: e.target.value})}>
              <option value="Web Engineering">Web Engineering</option>
              <option value="App Development">App Development</option>
              <option value="Graphics Design">Graphics Design</option>
            </select>

            <textarea style={{ ...inputStyle, height: '100px', resize: 'none' }} placeholder="Description" value={newProject.description} onChange={(e) => setNewProject({...newProject, description: e.target.value})} required />
            <input style={inputStyle} placeholder="Project Link" value={newProject.link} onChange={(e) => setNewProject({...newProject, link: e.target.value})} />

            <button type="submit" disabled={uploading} style={{ width: '100%', background: editId ? '#10b981' : '#fbbf24', color: '#020617', padding: '16px', border: 'none', borderRadius: '12px', fontWeight: '900', cursor: uploading ? 'not-allowed' : 'pointer', marginTop: '10px' }}>
              {editId ? 'UPDATE PROJECT' : 'PUBLISH TO SITE'}
            </button>
            {editId && <button type="button" onClick={() => {setEditId(null); setNewProject({title:'', category:'Web Engineering', description:'', link:'', imageUrl:''})}} style={{ width: '100%', marginTop: '10px', background: 'transparent', color: '#64748b', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}>Cancel Editing</button>}
          </form>
        </section>

        {/* 2. INQUIRY FEED */}
        <section style={sectionStyle}>
          <h2 style={{ color: '#fbbf24', marginTop: 0 }}>Inquiries ({messages.length})</h2>
          <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
            {messages.length === 0 ? <p style={{ color: '#64748b', textAlign: 'center', padding: '20px' }}>Inbox is empty</p> : 
              messages.map(msg => (
                <div key={msg.id} style={{ backgroundColor: '#1e293b66', padding: '20px', borderRadius: '16px', marginBottom: '15px', borderLeft: '4px solid #fbbf24' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontWeight: '800' }}>{msg.name}</span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{msg.createdAt?.toDate().toLocaleDateString('en-GB')}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#fbbf24', marginBottom: '10px' }}>{msg.email}</div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5' }}>{msg.message}</p>
                </div>
              ))
            }
          </div>
        </section>
      </div>

      {/* 3. ACTIVE PROJECTS MANAGEMENT */}
      <section style={sectionStyle}>
        <h2 style={{ color: '#fbbf24', marginTop: 0 }}>Live Portfolio Items</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {projects.map(p => (
            <div key={p.id} style={{ background: '#1e293b', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.03)' }}>
              <div style={{ height: '150px', width: '100%', background: '#0f172a', borderRadius: '8px', overflow: 'hidden', marginBottom: '15px' }}>
                {p.imageUrl ? (
                  <img src={p.imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155', fontSize: '0.7rem' }}>NO IMAGE</div>
                )}
              </div>
              <h4 style={{ margin: '0 0 5px 0' }}>{p.title}</h4>
              <p style={{ fontSize: '0.75rem', color: '#fbbf24', marginBottom: '15px' }}>{p.category}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => startEdit(p)} style={{ flex: 1, padding: '8px', border: '1px solid #fbbf24', color: '#fbbf24', background: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}>EDIT</button>
                <button onClick={() => handleDeleteProject(p.id)} style={{ flex: 1, padding: '8px', background: '#ef444422', color: '#ef4444', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}>DELETE</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;