import { useState } from 'react';
import './RatingStars.css';

const feedbackMap = {
    1: {
        label: 'Muy mala clase',
        tags: ['Actitud del docente', 'Videos extensos', 'Sin interacción', 'Contenido poco claro'],
    },
    2: {
        label: 'Mala clase',
        tags: ['Confuso', 'Lento', 'Poco participativa'],
    },
    3: {
        label: 'Clase regular',
        tags: ['Puede mejorar', 'Contenido justo', 'Interesante pero lenta'],
    },
    4: {
        label: 'Buena clase',
        tags: ['Audio mejorable', 'Ritmo un poco rápido', 'Podría ser más dinámica'],
    },
    5: {
        label: 'Excelente clase',
        tags: ['Bien hecho', 'Buena actitud', 'Aquí aprendí'],
        icons: [
            '/img/like.png',
            '/img/chat.png',
            '/img/lightbulb.png',
        ],
    },
};

export default function RatingStars() {
    const [rating, setRating] = useState(0);

    const handleSelect = (value) => {
        setRating(value);
        console.log('⭐ Calificación seleccionada:', value);
    };

    return (
        <div className="rating-container container text-center mt-5">
            <h3 className="mb-3"> ¿Cómo calificas esta clase? </h3>

            <div className="d-flex justify-content-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((value) => (
                    <span
                        key={value}
                        className={`star fs-1 ${rating >= value ? 'selected' : ''}`}
                        onClick={() => handleSelect(value)}
                    >
                        ★
                    </span>
                ))}
            </div>

            {rating > 0 && (
                <>
                    <h4 className="mt-3">{feedbackMap[rating].label}</h4>

                    <div className="mt-3 d-flex flex-wrap justify-content-center gap-3">
                        {feedbackMap[rating].tags?.map((tag) => (
                            <span key={tag} className="badge rounded-pill bg-light text-dark p-3">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {rating === 5 && (
                        <div className="mt-4 d-flex justify-content-center gap-4">
                            {feedbackMap[5].icons.map((src, index) => (
                                <div key={index} className="text-center">
                                    <img src={src} alt="icon" height="70" />
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
