import React from 'react';
import { Container, Title } from '../../styled-components';

export default function Leaderboard() {
  return (
    <Container className='leaderboardPage'>
      <Title>User Leaderboard</Title>
      <table className='table'>
        <thead>
          <tr>
            <th className='table-nomor'>no</th>
            <th className='table-name'>name</th>
            <th className='table-event'>events followed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Daniel Mananta</td>
            <td>4</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Titi DJ</td>
            <td>3</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Raffi Ahmad</td>
            <td>2</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Audrey</td>
            <td>1</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Cantika</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
