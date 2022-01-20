import React from 'react';
import {
  Experience,
  Experience2,
  ExperienceContent,
  ExperienceContent2,
  CustomerReview,
  UserImage,
  LocationType,
} from '../styles/MainStyles';
import {Container, Button} from '../globalStyles';
import {Link} from 'react-router-dom';
import {firstReview, secondReview} from '../review';
// import {setIsOpen} from '../App';

const Main = ({userReview}) => {
  return (
    <main>
      <Experience>
        <ExperienceContent>
          <div>
            <h2>Tolu and Joy’s Experience</h2>
            <button>CUSTOMER</button>
            <p>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            {/* <Link onClick={()=> setIsOpen(true)} className='share'> */}
            <Link to='/story' className='share'>
              Share your own story!
            </Link>
          </div>
          <picture>
            <source
              media='(min-width: 477.49px)'
              srcSet='./images/experience-des.png'
            />
            <img src='./images/experience-mob.png' alt='Black girls' />
          </picture>
        </ExperienceContent>
      </Experience>

      <CustomerReview>
        {firstReview.map((data, i) => {
          return (
            <>
              <section key={i}>
                <Container>
                  <img src={data.image} alt={data.alt} />
                  <h3>{data.name}</h3>
                  <LocationType>
                    <p>{data.location}</p>
                    {data.type === 'CUSTOMER' ? (
                      <Button firstReview>{data.type}</Button>
                    ) : (
                      <Button vendor firstReview>
                        {data.type}
                      </Button>
                    )}
                  </LocationType>
                  <p>{data.review}</p>
                </Container>
              </section>
            </>
          );
        })}
      </CustomerReview>

      <Experience2>
        <ExperienceContent2>
          <picture>
            <source
              media='(min-width: 477.49px)'
              srcSet='./images/victoria-experience-des.png'
            />
            <img
              src='./images/victoria-experience-mob.png'
              alt='Woman smiling'
            />
          </picture>
          <div>
            <h2>Josiah’s Experience</h2>
            <button>VENDOR</button>
            <p>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <Link to='/story' className='share'>
              Share your own story!
            </Link>
          </div>
        </ExperienceContent2>
      </Experience2>

      <CustomerReview>
        {secondReview.map((data, i) => {
          return (
            <>
              <section key={i}>
                <Container>
                  <img src={data.image} alt={data.alt} />
                  <h3>{data.name}</h3>
                  <div>
                    <Button vendor>{data.type}</Button>
                  </div>
                  <p>{data.review}</p>
                </Container>
              </section>
            </>
          );
        })}
      </CustomerReview>

      <CustomerReview id='new-testimonial'>
        {userReview.length
          ? userReview.map((data, i) => {
              return (
                <>
                  <section key={i}>
                    <Container>
                      <UserImage src={data.image} alt='User Reviewer' />
                      <h3>
                        {data.firstName} {data.lastName}
                      </h3>
                      <div>
                        {data.customerVendor === 'CUSTOMER' ? (
                          <Button>{data.customerVendor}</Button>
                        ) : (
                          <Button vendor>{data.customerVendor}</Button>
                        )}
                      </div>
                      <p>{data.story}</p>
                    </Container>
                  </section>
                </>
              );
            })
          : ''}
      </CustomerReview>
    </main>
  );
};

export default Main;
