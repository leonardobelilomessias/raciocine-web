// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import google from "@/assets/img/logos/google-logo.png"
import Wrapper from '@/layouts/Wrapper';
import HomeTwo from '@/components/homes/home-two';

export default function Home() {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
}
