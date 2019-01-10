import gql from 'graphql-tag';

const movieFragment = gql`
    fragment movieFragment on Movie {
        id
        vote_count
        title
        popularity
        poster_path
        genres {
            name
        }
        adult
        release_date
    }
`;

export const popular = gql`
    {
        popularMovies {
            results {
                ...movieFragment
            }
        }
    }
    
    ${movieFragment}
`;

export const upcoming = gql`
    {
        upcomingMovies {
            total_pages
            page
            results {
                ...movieFragment
            }
        }
    }

    ${movieFragment}

`;
