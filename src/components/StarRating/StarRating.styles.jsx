import styled from "styled-components";
export const Wrapper = styled.div`
  .star-rating {
    display: inline-block;
    font-size: 2rem;
    color: #ccc;
    cursor: pointer;
  }

  .star {
    display: inline-block;
    width: 1em;
  }

  .star-icon {
    position: relative;
  }

  .star-icon:before {
    content: "★";
    position: absolute;
    left: 0;
    color: #f1c40f;
    transition: color 0.2s ease-in-out;
  }

  .star.filled .star-icon:before,
  .star.half-filled .star-icon:before {
    color: #f1c40f;
  }

  .star.half-filled .star-icon:before {
    content: "½★";
  }

  .star:hover .star-icon:before,
  .star.filled:hover .star-icon:before,
  .star.half-filled:hover .star-icon:before {
    color: #e67e22;
  }
`;