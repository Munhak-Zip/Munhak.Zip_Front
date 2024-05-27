import React, {useState} from "react";
import '../../resources/css/Wish/Wish.css'
import Arrow from '../../resources/next.png'
import Poster from '../../resources/img/Main/sample1.png'
import Star from '../../resources/img/Movie/star.png'
const Wish=() => {
    const [mode, setMode] = useState('WELCOME');
    const [currentMoviePage, setCurrentMoviePage] = useState(0); // 현재 영화 페이지 번호
    const [currentReviewPage, setCurrentReviewPage] = useState(0); // 현재 리뷰 페이지 번호
    const [currentMyReviewPage, setCurrentMyReviewPage] = useState(0); // 현재 리뷰 페이지 번호

    const moviesPerPage = 2;
    const reviewsPerPage = 2;
    const myReviewsPerPage = 2;
    // 영화와 리뷰 배열은 이전과 동일하게 유지
    // 한 페이지당 보여줄 영화 수

    const movies = [
        { id: 1, title: '영화명1', poster: Poster, start: 5 },
        { id: 2, title: '영화명2', poster: Poster, start: 5 },
        { id: 3, title: '영화명3', poster: Poster, start: 5 },
        { id: 4, title: '영화명4', poster: Poster, start: 5 },

        // 필요한 만큼 영화 객체 추가
    ];
    const reviews = [
        { id: 1, mvTitle: '영화명1', poster: Poster, star: 1, title: "소제목1" },
        { id: 2, mvTitle: '영화명2', poster: Poster, star: 2, title: "소제목2" },
        { id: 3, mvTitle: '영화명3', poster: Poster, star: 3, title: "소제목3" },
        { id: 4, mvTitle: '영화명4', poster: Poster, star: 4, title: "소제목4" },
    ];
    const myReviews = [
        { id: 1, mvTitle: '영화명1', poster: Poster, star: 1, title: "내리뷰1" },
        { id: 2, mvTitle: '영화명2', poster: Poster, star: 2, title: "내리뷰2" },
        { id: 3, mvTitle: '영화명3', poster: Poster, star: 3, title: "내리뷰3" },
        { id: 4, mvTitle: '영화명4', poster: Poster, star: 4, title: "내리뷰4" },
    ]
    function Header(props) {
        console.log('props', props, props.title)
        return <header>
            <h1><a href="/" onClick={(event)=> {
                event.preventDefault();
                props.onChangeMode();
            }}>{props.title}</a></h1>
        </header>
    }
    const showNextMovies = () => {
        if ((currentMoviePage + 1) * moviesPerPage < movies.length) {
            setCurrentMoviePage(currentMoviePage + 1);
        }
    }

    const showPreMovies = () => {
        if (currentMoviePage > 0) {
            setCurrentMoviePage(currentMoviePage - 1);
        }
    }
    const showNextReviews = () => {
        if ((currentReviewPage + 1) * reviewsPerPage < reviews.length) {
            setCurrentReviewPage(currentReviewPage + 1);
        }
    }

    const showPreReviews = () => {
        if (currentReviewPage > 0) {
            setCurrentReviewPage(currentReviewPage - 1);
        }
    }
    const showNextMyReviews = () => {
        if ((currentMyReviewPage + 1) * myReviewsPerPage < myReviews.length) {
            setCurrentMyReviewPage(currentMyReviewPage + 1);
        }
    }

    const showPreMyReviews = () => {
        if (currentMyReviewPage > 0) {
            setCurrentMyReviewPage(currentMyReviewPage - 1);
        }
    }
    const renderWishMovies = () => {
        // 현재 페이지에 해당하는 영화만 필터링
        const start = currentMoviePage * moviesPerPage;
        const end = start + moviesPerPage;
        const currentMovies = movies.slice(start, end);

        return currentMovies.map(movie => (
            <span key={movie.id} className="movie">
                <img src={movie.poster} alt={movie.title} className="Poster-img"/>
                <p>{movie.title}<img src={Star} className={"star"}/>({movie.start})</p>
            </span>
        ));
        // 영화 데이터 배열 (실제 영화 데이터로 교체 가능)

        // 영화 배열을 순회하며 각 영화 포스터를 렌더링합니다.
        return movies.map(movie => (
            <span key={movie.id} className="movie">
                <img src={movie.poster} alt={movie.title} className="Poster-img"/>
                <p>{movie.title}<img src={Star} className={"star"}/>({movie.start})</p>
            </span>
        ));

    }

    const renderWishReviews = () => {
        // 현재 페이지에 해당하는 영화만 필터링
        const start = currentReviewPage * reviewsPerPage;
        const end = start + reviewsPerPage;
        const currentReviews = reviews.slice(start, end);

        return currentReviews.map(review => (
            <span key={review.id} className="review">
                <img src={review.poster} alt={review.title} className="Poster-img"/>
                <p/>{review.mvTitle}<p/>
                <div> {
                    // 별점이 유효한지 확인하고, 유효하지 않은 경우 0으로 처리
                    [...Array(Number.isInteger(review.star) && review.star > 0 ? review.star : 0)].map((_, i) => (
                        <img key={i} src={Star} className="star"/>
                    ))
                }
                </div>
                {review.title}
            </span>
        ));
    }
    const renderMyReviews = () => {
        // 현재 페이지에 해당하는 영화만 필터링
        const start = currentMyReviewPage * myReviewsPerPage;
        const end = start + myReviewsPerPage;
        const currentMyReviews = myReviews.slice(start, end);

        return currentMyReviews.map(review => (
            <span key={review.id} className="review">
                <img src={review.poster} alt={review.title} className="Poster-img"/>
                <p/>{review.mvTitle}<p/>
                <div> {
                    // 별점이 유효한지 확인하고, 유효하지 않은 경우 0으로 처리
                    [...Array(Number.isInteger(review.star) && review.star > 0 ? review.star : 0)].map((_, i) => (
                        <img key={i} src={Star} className="star"/>
                    ))
                }
                </div>
                {review.title}
            </span>
        ));
        // 영화 데이터 배열 (실제 영화 데이터로 교체 가능)
    }
    function Category(props) {
        let content; // String 제거
        let renderContent;
        let showPre;
        let showNext;
        if (props.type === "wishMovies") { // .equals() 대신 === 사용
            content = "좋아하는 영화";
            renderContent = renderWishMovies;
            showPre = showPreMovies;
            showNext = showNextMovies;
        }
        else if(props.type === "wishReviews") { // .equals() 대신 === 사용
            content = "좋아하는 리뷰";
            renderContent = renderWishReviews;
            showPre = showPreReviews;
            showNext = showNextReviews;
        }
        else{
            content = "내가 작성한 리뷰";
            renderContent = renderMyReviews;
            showPre = showPreMyReviews;
            showNext = showNextMyReviews;
        }
        return <div className={props.type}>
            {content}
            <p/>
            <img src={Arrow} className={"before-button"} alt="before" onClick={showPre}/>
            <img src={Arrow} className={"next-button"} alt="next" onClick={showNext}/>
            <div className={"new-movies"}>
                {renderContent()}
            </div>
        </div>
    }

    return (
        <div className={"div1"}>
            <Category type={"wishMovies"}></Category>
            <Category type={"wishReviews"}></Category>
            <Category type={"myReviews"}></Category>
        </div>
    )
}
export default Wish;