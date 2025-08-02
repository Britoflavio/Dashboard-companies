
import CardSummary from './components/CardSummary/CardSummary';
import { BookOpenCheck, UserRound, Waypoints } from 'lucide-react';
import { LastCustomers } from './components/LastCustomers';
export default function Home() {

  return (
    <div>
      
      <h2 className='text-2xl mb-4'>Dashboard</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-3 gap-3 lg:gap-x-20'>
        <CardSummary 
        icon={UserRound}
        total='12.450'
        title='Companies created'
        average={15}
        totaltipText='See all of the companies created'
        /> 
        <CardSummary 
        icon={Waypoints}
        total='86.5%'
        title='Total Revenue'
        average={80}
        totaltipText='See all of summary'
        />
        <CardSummary 
        icon={BookOpenCheck}
        total='$363.95'
        title='Bouce rate'
        average={30}
        totaltipText='See all of the bouce rate'
        /> 
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12'>
        <LastCustomers/>
        <p>Sales Distributors</p>
      </div>
    </div>
  );
}
