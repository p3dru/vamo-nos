import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import './style.css';
import EventDetails from '../../../assets/EventDetails';
import axios from 'axios';
import { API_BASEURL } from '../../../global';

export default function Participant_EventDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [event, setEvent] = useState(
        // Implemantar Get com API
        //
        // axios.get(`${API_BASEURL}/event/${id}`)
        // .then((res) => {
        //     console.log(res);
        //     return(res.data);
        // })
        // .catch((err) => {
        //     console.error(err);
        //     alert('Erro Interno 500');
        // })
        {
            id: 2,
            title: 'DOIS',
            description: 'Lorem ipsun alguma coisa',
            category: 'doisss',
            date: new Date('2023-12-20'),
            picture: null,
            organizer: 'orga01',
            followers: 50,
        }
    );

    const [following, setFollowing] = useState(false);

    function follow() {
        // axios.post(`${API_BASEURL}/follow-event/${id}`)
        // .then((res) => {
        //     console.log(res);
        // })
        // .catch((err) => {
        //     console.error(err);
        //     alert('Erro Interno 500');
        // })

        setFollowing(true);
    }

    function unfollow() {
        // axios.post(`${API_BASEURL}/unfollow-event/${id}`)
        // .then((res) => {
        //     console.log(res);
        // })
        // .catch((err) => {
        //     console.error(err);
        //     alert('Erro Interno 500');
        // })

        setFollowing(false);
    }

    return (
        <div>
            <EventDetails event={event} />

            <hr />


            <div className="d-inline-grid">
                {following ? (
                    <button
                        className='btn my-2'
                        onClick={() => {unfollow()}}
                    >
                        <i className="bi bi-star-fill me-2" /> Participando
                    </button>
                ):(
                    <button
                        className='btn btn-info text-info my-2'
                        onClick={() => {follow()}}
                    >
                        <i className="bi bi-star me-2" /> Participar
                    </button>
                )}
            </div>

            <hr />

            <Link to={'/'}>Voltar</Link>
        </div>
    )
}