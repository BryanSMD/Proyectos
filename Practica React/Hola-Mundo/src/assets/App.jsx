import {TwitterFollowCard} from './TwitterFollowCard.jsx';

const format = (userName) => `@${userName}`;

const users = [
    {
        formatUserName: format,
        name: 'Nexxuz',
        userName: 'NexxuzHD',
        isFollowing: true
    },
    {
        formatUserName: format,
        name: 'elrubius',
        userName: 'Rubiu5',
        isFollowing: true
    },
    {
        formatUserName: format,
        name: 'Marmota Espacial',
        userName: 'MarmotaYoutube',
        isFollowing: false
    },
    {
        formatUserName: format,
        name: 'XpressTV',
        userName: 'XpressTv_',
        isFollowing: false
    }
];

export function App() {
  return (
    <section className='App'>
        {
            users.map (user => {
                const {formatUserName, userName, name, isFollowing} = user;
                return (
                    <TwitterFollowCard 
                        key={userName}
                        formatUserName={formatUserName}
                        name={name}
                        userName={userName}   
                        isFollowing={isFollowing}
                    />
                )
            })
        }
    </section>
  );
}