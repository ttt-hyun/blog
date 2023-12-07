import React, {useState, useEffect} from 'react';

import MarkDown from 'markdown-to-jsx';

import 'github-markdown-css';


function Main(){
    const file_name = 'test.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`../markdown/${file_name}`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setPost(res))
        })
        .catch(err => console.log(err));
        // .then(res => console.log(res))
        // .catch(err => console.log(err)); 
    })
    return (
        <div className="max-grid ml-auto mr-auto flex-box flex-column">
            <div className="row">
                <div className="bento-box bento-pd prim-shadow">
                    <div className="float-title">
                        <h2>나의 첫 Git블로그</h2>
                    </div>
                    <div className="bsc-post markdown-body">
                        <MarkDown>
                            {post}
                        </MarkDown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;