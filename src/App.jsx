import React from 'react';

import './App.css'

import First from './components/basic/First';
import Props from './components/basic/Props';
import Fragments from './components/basic/Fragments';
import Random from './components/basic/Random';
import Family from './components/basic/Family';
import FamilyMember from './components/basic/FamilyMembers';
import StudentsList from './components/loops/StudentsList';
import ProductsList from './components/loops/ProductsList';
import EvenOdd from './components/conditionals/EvenOdd';
import User from './components/conditionals/User';
import Direct from './components/comunication/Direct';

import Card from './components/layout/Card';

export default () => (
  <div id="app">
    <h1 className="main_title">Fundamentos React</h1>
    <div className="Cards">
      <Card title="Card #01" color="#fed766">
        <Random min={2} max={60} />
      </Card>

      <Card title="Card #02" color="#fec8c1">
        <Fragments />
      </Card>

      <Card title="Card #03" color="#b3cde0">
        <Props 
          title='titulo' 
          subtitle='subtitulo'
        />
      </Card>

      <Card title="Card #04" color="#fe8a71">
        <First /> 
      </Card>

      <Card title="Card #05" color="#e6e6ea">
        <Family lastName="Ferreira">
          <FamilyMember name="Ana" />
          <FamilyMember name="Pedro" />
          <FamilyMember name="João" />
        </Family> 
      </Card>

      <Card title="Card #06" color="#7bc043">
        <StudentsList />
      </Card>

      <Card title="Card #07" color="#88d8b0">
        <ProductsList />
      </Card>

      <Card title="Card #08" color="#ffeead">
        <EvenOdd num={4}/>
      </Card>

      <Card title="Card #09" color="#ff8b94">
        <User user={{name: "joana"}}/>
        <User name={{email: "joana"}}/>
      </Card>

      <Card title="Card #10" color="#ffd3b6">
        <Direct />
      </Card>

      <Card title="Card #11" color="#2ab7ca">
        <Direct />
      </Card>

      <Card title="Card #12" color="#f37735">
        <Direct />
      </Card>

      <Card title="Card #13" color="#ff3377">
        <Direct />
      </Card>

      <Card title="Card #14" color="#8874a3">
        <Direct />
      </Card>
    </div>
  </div>
);