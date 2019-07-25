import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

import { Layout, Article } from "../components";

import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../home-sections/Hero";
import Projects from "../home-sections/Projects";
import About from "../home-sections/About";
import Contact from "../home-sections/Contact";
import Blog from "../home-sections/Blog";
import avatar from "../images/avatar.jpg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const IndexPage = ({
  data: {
    allMdx: { nodes: posts }
  }
}) => (
  <Layout noFooter>
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Miuki Miu
        </BigTitle>
        <Subtitle>
          My real name is Elizabet and I'm a product Designer who loves to code!
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Cassette Tape"
            link="https://miukimiu.github.io/cassette-tape"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A Chrome experiment that I presented at the Google I/0 Dublin in
            2016. This project explores the web audio API.
          </ProjectCard>
          <ProjectCard
            title="React Kawaii"
            link="https://github.com/miukimiu/react-kawaii"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            React Kawaii is a library of cute SVG illustrations (react
            components). Ideal to give some cuteness and personality to your
            react application.
          </ProjectCard>
          <ProjectCard
            title="Soundtracktor"
            link="https://www.soundtracktor.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Soundtracktor is a free AI-powered platform that connects composers
            to the right opportunities and helps them monetize their music.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={2}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Elizabet Oliveira" />
          <AboutSub>
            The English language can not fully capture the depth and complexity
            of my thoughts. So I'm incorporating Emoji into my speech to better
            express myself. Winky face.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          You know the way you feel when you see a picture of two otters holding
          hands? That's how you're gonna feel every day. My mother cried the day
          I was born because she knew she’d never be prettier than me. You
          should make me your campaign manager. I was born for politics. I have
          great hair and I love lying. Captain? The kids want to know where
          Paulie the Pigeon is. I told them he got sucked up into an airplane
          engine, is that all right?
        </AboutDesc>
      </About>
      <Blog offset={3}>
        <Title>Latest articles</Title>
        {posts.map(post => (
          <Article
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            timeToRead={post.timeToRead}
            slug={post.fields.slug}
            categories={post.frontmatter.categories}
            key={post.fields.slug}
          />
        ))}
      </Blog>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on
            other platforms:{" "}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{" "}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
      </Contact>
    </Parallax>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired
    })
  }).isRequired
};

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MM/DD/YYYY")
          categories
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`;
