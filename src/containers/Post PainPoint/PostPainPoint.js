import React from "react";
import './PostPainPoint.css';
import ReactMarkdown from 'react-markdown';
import ReactDom from 'react-dom';

// ReactDom.render(<ReactMarkdown># Hello, *world*!</ReactMarkdown>, document.body)
class PostPainPoint extends React.Component {

    componentDidMount() {
        let formatListBtn = document.querySelector('.format__list__btn');
        let formatListMenu = document.querySelector('.format__list__menu');
        let inputTitle = document.querySelector('.post__form__input[type="text"]');
        let inputBody = document.querySelector('.input-body');
        let inputTags = document.querySelectorAll('.post__form__input[type="text"]')[1];
        let previewBtn = document.querySelector('.preview__btn');
        let title = document.querySelector('.modal__text h2');
        let preview = document.querySelector('.modal__body');
        let tags = document.querySelector('.tags');
        let rawText, parsedText;

        formatListBtn.addEventListener('click', () => {
            if (formatListMenu.classList.contains('hidden__list')) {
                formatListMenu.classList.remove('hidden__list');
                formatListBtn.classList.add('format__list__btn--active');
            } else {
                formatListMenu.classList.add('hidden__list');
                formatListBtn.classList.remove('format__list__btn--active');
            }
        });
        previewBtn.addEventListener('click', () => {
            title.textContent = inputTitle.value;
            rawText = inputBody.value;
            parsedText = <ReactMarkdown children={rawText} />;
            ReactDom.render(parsedText, preview);
            tags.innerHTML = inputTags.value;
        })
    }

    render() {
        return (
            <main className="post__container">
                <h1 className="post__header">Post painpoint</h1>
                <form action="/" method="post">
                    <section className="post__form">
                        <div className="post__form__group">
                            <label className="post__form__label">Title</label>
                            <small className="post__form__desc">Be specific</small>
                            <input className="post__form__input" type="text" />
                        </div>
                        <div className="post__form__group">
                            <label className="post__form__label">Body</label>
                            <small className="post__form__desc">Include all the information you can</small>
                            <div className="post__format">
                                <div className="formats">
                                    <button className="format__btn" type="button"><i class="fa fa-bold" aria-hidden="true"></i></button>
                                    <button className="format__btn" type="button"><i class="fa fa-italic" aria-hidden="true"></i></button>
                                    <button className="format__btn" type="button"><i class="fa fa-link" aria-hidden="true"></i></button>
                                    {/* <button className="format__btn" type="button"><i class="fa fa-picture-o" aria-hidden="true"></i></button> */}
                                    <button className="format__btn" type="button"><i class="fa fa-list-ul" aria-hidden="true"></i></button>
                                </div>
                                <button className="format__list__btn" type="button"><i class="fa fa-keyboard-o" aria-hidden="true"></i></button>
                                <div className="format__list__menu hidden__list">
                                    <li className="format__desc">Make text bold by surrounding it with double asterisks **</li>
                                    <li className="format__desc">Italicize text by surrounding it with single asterisks *</li>
                                    <li className="format__desc">Create links by wrapping text with square brackets and the URL in parentheses [Text](https://link.com)</li>
                                    {/* <li className="format__desc"></li> */}
                                    <li className="format__desc">Make lists by starting lines with hyphens - or numbers 1.</li>
                                </div>
                            </div>
                            <textarea className="post__form__input input-body" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="preview"></div>
                        <div className="post__form__group">
                            <label className="post__form__label">Tags</label>
                            <small className="post__form__desc">Add tags to describe your painpoint</small>
                            <input className="post__form__input" type="text" />
                        </div>
                        <div className="form__btns">
                            {/* <button className="preview__btn" type="button">Preview Post</button> */}
                            <a className="preview__btn" href="#modal">Preview Post</a>
                            <div className="modal__container">
                                <div className="modal" id="modal">
                                    <div className="modal__inner">
                                        <h1 className="modal__header">Preview post</h1>
                                        <div className="modal__text">
                                            <h2></h2>
                                            <p className="modal__body"></p>
                                            <div className="tags"></div>
                                        </div>
                                        <button className="post__form__submit" type="submit">Post Painpoint</button>
                                        <a className="modal__close" href="#">&times;</a>
                                    </div>
                                </div>
                            </div>
                            <button className="post__form__submit" type="submit">Post Painpoint</button>
                        </div>
                    </section>
                </form>
            </main>
        )
    }
}

export default PostPainPoint;