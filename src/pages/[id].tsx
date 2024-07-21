import React from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/HomePageComponents/Navbar';
import CoinDetailHero from '@/components/CoinDetailPageComponents/CoinDetailHero';
import Footer from '@/components/HomePageComponents/Footer';

const Coindetail = () => {

  const router = useRouter();
  const coinName = router.query.id;

  return (
    <div>
      <div className="h-28">
        <Navbar />
      </div>

      <CoinDetailHero cryptoName={coinName} />

      <br />
      <br />
      <br />
      <br />

      <div>
      </div>

      <br />
      <br />
      <br />

      <Footer />

    </div>
  )
}

export default Coindetail;