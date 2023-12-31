import React from 'react';
import Navbar from '../components/_App/Navbar';
import TopHeader from '../components/_App/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import BlogSidebar from '../components/BlogDetails/BlogSidebar';

const BlogDetails = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Blog Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
            /> 

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-details/blog-details.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><span>Posted On:</span> <a href="#">May 19, 2020</a></li>
                                            <li><span>Posted By:</span> <a href="#">John Anderson</a></li>
                                        </ul>
                                    </div>

                                    <h3>Temperature App UX Studies & Development Case</h3>

                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit, consectetur qui ratione voluptatem sequi nesciunt magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non.</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat labore et dolore magna aliqua.</p>

                                    <blockquote className="flaticon-quote">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid praesentium eveniet illum asperiores, quidem, ipsum voluptatum numquam ducimus nisi exercitationem dolorum facilis Repellendus aliquid praesentium eveniet illum asperiores.</p>
                                    </blockquote>
                                    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat consectetur adipisicing onsectetur adipisicing.</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat ullamco laboris nisi ut aliquip ex.</p>

                                    <div className="row justify-content-center mb-3">
                                        <div className="col-lg-4 col-sm-6 mt-2">
                                            <div className="b-d-s-img">
                                                <img src="/images/blog/blog4.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 mt-2">
                                            <div className="b-d-s-img">
                                                <img src="/images/blog/blog5.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="b-d-s-img">
                                                <img src="/images/blog/blog6.jpg" alt="Image" />
                                            </div>
                                        </div>
                                    </div>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam. consectetur adipisicing elit, sed ud exercitation ullamco laboris nisi ut aliquip commodo</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam.</p>
                                </div>

                                <div className="post-navigation">
                                    <div className="navigation-links">
                                        <div className="nav-previous">
                                            <Link href="#">
                                                <a>
                                                    <i className='bx bx-left-arrow-alt'></i> Prev Post
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="nav-next">
                                            <Link href="#">
                                                <a>
                                                    Next Post <i className='bx bx-right-arrow-alt'></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="comments-area">
                                    <h3 className="comments-title">2 Comments:</h3>

                                    <ol className="comment-list">
                                        <li className="comment">
                                            <div className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/images/blog-details/comment-img-1.jpg" className="avatar" alt="image" />
                                                        <b className="fn">John Jones</b>
                                                        <span className="says">says:</span>
                                                    </div>

                                                    <div className="comment-metadata">
                                                        <span>April 24, 2020 at 10:59 am</span>
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                                </div>

                                                <div className="reply">
                                                    <Link href="#">
                                                        <a className="comment-reply-link">Reply</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <ol className="children">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src="/images/blog-details/comment-img-2.jpg" className="avatar" alt="image" />
                                                                <b className="fn">Steven Smith</b>
                                                                <span className="says">says:</span>
                                                            </div>
                
                                                            <div className="comment-metadata">
                                                                <span>April  24, 2020 at 10:59 am</span>
                                                            </div>
                                                        </footer>
                
                                                        <div className="comment-content">
                                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim</p>
                                                        </div>
                
                                                        <div className="reply">
                                                            <Link href="#">
                                                                <a className="comment-reply-link">Reply</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </li>

                                        <li className="comment">
                                            <div className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/images/blog-details/comment-img-3.jpg" className="avatar" alt="image" />
                                                        <b className="fn">John Doe</b>
                                                        <span className="says">says:</span>
                                                    </div>

                                                    <div className="comment-metadata">
                                                        <span>April  24, 2020 at 10:59 am</span>
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                                </div>

                                                <div className="reply">
                                                    <Link href="#">
                                                        <a className="comment-reply-link">Reply</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>

                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave a Reply</h3>

                                        <form className="comment-form">
                                            <p className="comment-notes">
                                                <span id="email-notes">Your email address will not be published.</span>
                                                Required fields are marked <span className="required">*</span>
                                            </p>
                                            <p className="comment-form-author">
                                                <label>Name <span className="required">*</span></label>
                                                <input type="text" id="author" name="author" required="required" />
                                            </p>
                                            <p className="comment-form-email">
                                                <label>Email <span className="required">*</span></label>
                                                <input type="email" id="email" name="email" required="required" />
                                            </p>
                                            <p className="comment-form-url">
                                                <label>Website</label>
                                                <input type="url" id="url" name="url" />
                                            </p>
                                            <p className="comment-form-comment">
                                                <label>Comment</label>
                                                <textarea name="comment" id="comment" rows="5" required="required"></textarea>
                                            </p>
                                            <p className="form-submit">
                                                <input type="submit" name="submit" id="submit" className="submit" value="Post A Comment" />
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
       
            <Footer />
        </>
    )
}

export default BlogDetails;