import Notification from '../Notification/Notification';
import './AddBotPage.scss';

function AddBotPage() {
    const handleOpen = () => true;

    return (
        <section>
            <Notification text='Письмо с подтверждением отправлено тебе на' handleOpen={handleOpen}></Notification>
        </section>
    );
}

export default AddBotPage;
