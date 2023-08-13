import UserIcon1 from '../../images/icon/40x40/chat-user-icons/user1.svg';
import UserIcon2 from '../../images/icon/40x40/chat-user-icons/user2.svg';
import UserIcon3 from '../../images/icon/40x40/chat-user-icons/user3.svg';
import UserIcon4 from '../../images/icon/40x40/chat-user-icons/user4.svg';

export const users = [
    {
        id: 1,
        name: 'Марк',
        icon: UserIcon1,
        inactive: '4 часа',
    },
    {
        id: 2,
        name: 'Оператор',
        icon: UserIcon2,
        inactive: '3 мин',
    },
    {
        id: 3,
        name: 'Сергей Надеин', 
        icon: UserIcon3,
        inactive: '30 мин',
    },
    {
        id: 4,
        name: 'Даша К.', 
        icon: UserIcon4,
        inactive: '12.06.22',
    }
];

export const messages = [
    {
        id: 1,
        chat_id: 3,
        userId: 3,
        text: 'Привет, как это сделать?',
        replyTo: 0,
        created: '16 мин назад',
        read: '14:05',
    },
    {
        id: 2,
        chat_id: 3,
        userId: 2,
        text: 'Привет, {name}! Перейдите по ссылке https://BOTkit/file/-node-id=3A332705',
        replyTo: 1,
        created: '10 мин назад',
        read: '14:12',
    },
    {
        id: 3,
        chat_id: 3,
        userId: 3,
        text: 'Ок! Спасибо',
        replyTo: 2,
        created: '3 мин назад',
        read: '14:05',
    },
]