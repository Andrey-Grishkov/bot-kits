import Notification from '../Notification/Notification';
import './AddBotPage.scss';

function AddBotPage() {

    return (
        <section>
            <Notification imageType='letter' handleOpen={() => true}></Notification>
        </section>
    );
}

export default AddBotPage;
