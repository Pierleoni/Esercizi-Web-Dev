import React, { useState, useEffect } from 'react';

const API_URL = "http://localhost:3000/users";

const UserFullCrude = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        telefono: '',
        email: ''
    });
    const [editId, setEditId] = useState(null);
    const getUsers = async () => {
        try {
            const response = await fetch(API_URL);
            const result = await response.json();
            setUsers(result);
        } catch (err) {
            console.log("Errore nel fetch degli utenti", err);
        }
    };

    useEffect(() => { getUsers(); }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.nome || !formData.cognome || !formData.email) {
            alert("Compila tutti i campi obbligatori.");
            return;
        }

        try {
            if (editId === null) {
                // Creazione nuovo utente
                await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
            } else {
                // Modifica utente esistente
                await fetch(`${API_URL}/${editId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
            }

            setFormData({ nome: '', cognome: '', telefono: '', email: '' });
            setEditId(null);
            getUsers();
        } catch (err) {
            console.log("Errore nel salvataggio", err);
        }
    };

    const handleEdit = (user) => {
        setFormData({
            nome: user.nome,
            cognome: user.cognome,
            telefono: user.telefono,
            email: user.email
        });
        setEditId(user.id);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Confermi la cancellazione dell'utente?")) return;
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            getUsers();
        } catch (err) {
            console.log("Errore nella cancellazione", err);
        }
    };

    return (
        <div className="container my-5">
            <h1 className="mb-4">Gestione Utenti</h1>
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h2 className="card-title mb-4">{editId ? "Modifica utente" : "Nuovo utente"}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <label htmlFor="nome" className="form-label fw-bold">Nome *</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    className="form-control"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="cognome" className="form-label fw-bold">Cognome *</label>
                                <input
                                    type="text"
                                    id="cognome"
                                    name="cognome"
                                    className="form-control"
                                    value={formData.cognome}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row g-3 mb-4">
                            <div className="col-md-6">
                                <label htmlFor="telefono" className="form-label fw-bold">Telefono</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    className="form-control"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label fw-bold">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            <button type="submit" className="btn btn-primary">
                                {editId ? "Aggiorna" : "Salva dati"}
                            </button>
                            {editId && (
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        setFormData({ nome: '', cognome: '', telefono: '', email: '' });
                                        setEditId(null);
                                    }}
                                >
                                    Annulla modifica
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            {/* Lista utenti */}
            <div className="card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Lista utenti</h2>
                    <ul className="list-group">
                        {users.map((user) => (
                            <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{user.nome} {user.cognome}</strong><br />
                                    <small>{user.email} | {user.telefono}</small>
                                </div>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-warning btn-sm" onClick={() => handleEdit(user)}>
                                        Update
                                    </button>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserFullCrude;
