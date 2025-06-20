import RatingStars from '../components/RatingStars/RatingStars';
import { useNavigate } from 'react-router-dom';

export default function RatingPage() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/thankyou');
    };

    return (
        <main>
            <RatingStars onSubmit={handleSubmit} />
        </main>
    );
}
