import React from 'react'
import "../styles/Blogs.css"
import "./Footer.js"

const Blogs = () => {
  return (
    <div className="main_blogs">
    <div class="container_blogs">
  <div class="card_blogs">
    <div class="card__header_blogs">
      <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image_blogs" width="600" />
    </div>
    <div class="card__body_blogs">
      <span class="tag tag-blue_blogs">Website</span>
      <h4>How to Install a WordPress Plugin </h4>
      <p>The easiest way of installing a WordPress plugin is to use the plugin search. The only downside of this option is that a plugin must be in the WordPress plugin directory which is limited to only free plugins.First thing you need to visit the Plugins » Add New page inside your WordPress admin area.</p>
    </div>
    <div class="card__footer_blogs">
      <div class="user_blogs">
        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image" />
        <div class="user__info_blogs">
          <h5>Fasih ul Hassan Baig</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div>
  <div class="card_blogs">
    <div class="card__header_blogs">
      <img src="https://source.unsplash.com/600x400/?Routers" alt="card__image" class="card__image_blogs" width="600" />
    </div>
    <div class="card__body_blogs">
      <span class="tag tag-brown_blogs">Networking</span>
      <h4>Can I change my router username and password?</h4>
      <p>It's typically in the Administration or Security tabs of your router's main settings page. When you've found it, enter the default username and password, and the desired new username and password to change the setting.</p>
    </div>
    <div class="card__footer_blogs">
      <div class="user_blogs">
        <img src="https://i.pravatar.cc/40?img=2" alt="user__image" class="user__image" />
        <div class="user__info_blogs">
          <h5>Fasih ul Hassan Baig</h5>
          <small>Yesterday</small>
        </div>
      </div>
    </div>
  </div>
  <div class="card_blogs">
    <div class="card__header_blogs">
      <img src="https://source.unsplash.com/600x400/?mobile" alt="card__image" class="card__image_blogs" width="600" />
    </div>
    <div class="card__body_blogs">
      <span class="tag tag-red_blogs">Mobile App</span>
      <h4>What is Flutter short note?</h4>
      <p>Flutter is Google's free and open-source UI framework for creating native mobile applications. Released in 2017, Flutter allows developers to build mobile applications with a single codebase and programming language. This capability makes building both iOS and Android apps simpler and faster.</p>
    </div>
    <div class="card__footer_blogs">
      <div class="user_blogs">
        <img src="https://i.pravatar.cc/40?img=3" alt="user__image" class="user__image" />
        <div class="user__info_blogs">
          <h5>Fasih ul Hassan Baig</h5>
          <small>2d ago</small>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default Blogs