import React from "react";
import './PostPainPoint.css';

class PostPainPoint extends React.Component {

    componentDidMount(){
        let formatListBtn = document.querySelector('.format__list__btn');
        let formatListMenu = document.querySelector('.format__list__menu');

        formatListBtn.addEventListener('click', () => {
            if (formatListMenu.classList.contains('hidden__list')) {
                formatListMenu.classList.remove('hidden__list');
                formatListBtn.classList.add('format__list__btn--active');
            } else {
                formatListMenu.classList.add('hidden__list');
                formatListBtn.classList.remove('format__list__btn--active');
            }
        });
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
                            <textarea className="post__form__input" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="post__form__group">
                            <label className="post__form__label">Tags</label>
                            <small className="post__form__desc">Add tags to describe your painpoint</small>
                            <input className="post__form__input" type="text" />
                        </div>
                    </section>
                    <button className="post__form__submit" type="submit">Post Painpoint</button>
                </form>
            </main>
        )
    }
}

export default PostPainPoint;