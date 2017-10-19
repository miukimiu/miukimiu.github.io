import React from 'react';
import { KawaiiIceCream } from 'react-kawaii';
import WorkItem from './common/WorkItem';
import PageTitle from './common/PageTitle';
import img1 from '../../images/work/iguide.png';
import img2 from '../../images/work/newyou.png';

const Work = () => (
  <section className="section section--light work">
    <svg
      className="work__separator"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
    </svg>
    <div className="section__container">
      <div className="row">
        <div className="col-xs-12">
          <PageTitle title="UX/UI Design Works" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <WorkItem
            img={img1}
            title="New you"
            tag="lorem ipsum"
          />
        </div>
        <div className="col-xs-12 col-sm-4">
          <WorkItem
            img={img2}
            title="New you"
            tag="lorem ipsum"
          />
        </div>
        <div className="col-xs-12 col-sm-4">
          <WorkItem
            img={img1}
            title="New you"
            tag="lorem ipsum"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Work;
