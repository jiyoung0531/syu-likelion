import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

export default function App() {
    const [people, change] = useState("집 가고 싶은 사람")

    return (
        <BrowserRouter>
            <div>
                <h2>13기 아기사자 박지영</h2>
                <h1>{people}</h1>
            </div>
            <div>
                <Link to="/about">내 소개</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home handleTextChange={change} />} />
                <Route path="/about" element={
                    <div clssName="hi">
                        <p>박지영</p>
                        <p>13기 아기사자</p>
                        <p>컴퓨터공학부 24학번</p>
                        <p>목표: 멋사 활동을 통해 프론트엔드 마스터하기</p>
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    );
}