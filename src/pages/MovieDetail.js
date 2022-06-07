import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {MovieState} from "../movieState";

const MovieDetail = () => {

    const location = useLocation();
    const url = location.pathname;
    const [movies, setMovies] = useState(MovieState); //movies is an array of objects
    const [movie, setMovie] = useState(null);

    //UseEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url); //currentMovie stills being an array 
        setMovie(currentMovie[0]); //with currentMovie[0] now is just and object
    }, [movies, url]);

    return(
        <>
            {movie &&( //only if movie is available is gonna render out the content

               <Details>
                
                <HeadLine>
                    <h2>{movie.title}</h2>  
                    <img src={movie.mainImg} alt="movie" />
                </HeadLine>  

                <Awards>
                    {movie.awards.map((award) => (
                        <Award title={award.title} description={award.description} key={award.title}/>
                    ))}
                </Awards>

                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="movie" />
                </ImageDisplay>
            
              </Details>
                
            )} 
            
        </>
    )
}

const Details = styled.div`

    color: white;


`;

const HeadLine = styled.div`

min-height: 90vh;
padding-top: 20vh;
position: relative; //children
h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}

`;

const Awards = styled.div`

min-height: 80vh;
display: flex;
margin: 5rem 10rem;
align-items: center;
justify-content: space-around;

`;

const ImageDisplay = styled.div`

min-height: 50vh;
img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`;

//Award Component

const Award = ({title, description}) => {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}


const AwardStyle = styled.div`

padding: 5rem;
h3{
    font-size: 2rem;
}
.line{
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
}
p{
    padding: 2rem 0rem;
}

`;


export default MovieDetail;