import Link from 'next/link';

import { Container, Content } from '@/styles/pages/Home'

import Card from './components/Card/Card';

export default function Home() {
  return (
    <Container>
      <h1>
        Dashboard
      </h1>

      <Content>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Content>
      
    </Container>
    )
}