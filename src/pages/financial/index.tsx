import React from 'react';

import { Container, Content } from '@/styles/pages/financial/Financial';
import Table from '../components/DataTable/DataTable';

export default function Financial() {
    return (
        <Container>
            <h1>Financial</h1>

            <Content>
            <Table/>    
            </Content>

        </Container>
        
    );
};