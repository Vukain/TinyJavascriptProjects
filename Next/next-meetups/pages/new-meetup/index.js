import { useRouter } from 'next/router';
import Head from 'next/head';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = (props) => {
    const router = useRouter();
    const addMetupHandler = async (enteredMeetupData) => {

        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
        router.push('/');
    };

    return (
        <>
            <Head>
                <title>Add Meetup</title>
                <meta name="description" content="Add new meetup" />
            </Head>
            <NewMeetupForm onAddMeetup={addMetupHandler} />
        </>
    );
};

export default NewMeetupPage;