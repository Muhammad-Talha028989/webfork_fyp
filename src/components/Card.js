import React from 'react'
import "../styles/Card.css"

const Card = () => {
  return (
    <div>
        <div className="card-container">
            <div className="card">
              <div className="cards-child">
                  <h3 className='cards-heading'>Feature # 1</h3>
                  <h3 className='cards-sub'>Well Designed and Functional</h3>
                  <p className='cards-p'>Your site reflects your company, your products, your services and ultimately your brand. So it’s important to be visually appealing, polished and professional. Allow white space, uncluttered layouts with quality photographs and graphics look and let your message shine through.</p>
              </div>

              <div className="cards-child">
                  <h3 className='cards-heading'>Feature # 2</h3>
                  <h3 className='cards-sub'>Easy to Use</h3>
                  <p className='cards-p'>Site visitors are always in a hurry. Don’t make them work for information. User Experience (UX) plays a key role in helping visitors use, understand and stay on your website. Create obvious, logical navigation with clear hierarchy. Use consistent layouts and visual cues for functionality across the site..</p>
              </div>

              <div className="cards-child">
                  <h3 className='cards-heading'>Feature # 3</h3>
                  <h3 className='cards-sub'>Optimized for Mobile</h3>
                  <p className='cards-p'>YToday there are no excuses, your site must look great and work well on any platform. The growth of mobile and tablet devices is not slowing down and you just don’t know what your next visitor will be using. Optimizing for mobile will improve both the experience of your visitors and your SEO Rankings.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Card