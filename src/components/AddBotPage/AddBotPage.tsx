import Notification from '../Notification/Notification';
import './AddBotPage.scss';

function AddBotPage() {
    const handleOpen = () => true;

    return (
        <section>
            <Notification imageType='password' handleOpen={handleOpen}></Notification>
        </section>
    );
}

export default AddBotPage;
