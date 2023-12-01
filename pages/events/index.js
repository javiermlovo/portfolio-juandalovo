import Image from 'next/image';
import Link from 'next/link';
import AllEvents from '@/src/components/events/event-page';
export async function getStaticProps() {
    const {events_categories} = await import ('/tmp/data/data.json');
    return {
        props:{
            data: events_categories
        }
    }
}
const EventsPage = ({data}) => {
    return (
        <AllEvents data={data}/>
    )
}

export default EventsPage