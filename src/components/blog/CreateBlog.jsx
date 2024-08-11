
import React from "react"

const BlogCard = () => {
    return (
        <>

            <section className='contacts padding'>
                <div className='container shadow flexSB'>
                    <div className='left row'>
                        <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fst2.depositphotos.com%2F1065578%2F11865%2Fv%2F450%2Fdepositphotos_118655436-stock-illustration-blog-word-lettering-banner.jpg&tbnid=ZoToJiWWRmHsVM&vet=10CNUBEDMowAFqFwoTCLihh_KpvYYDFQAAAAAdAAAAABAD..i&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fvectors%2Fblog.html&docid=PNub1xn9GNqnKM&w=600&h=452&q=blog%20images&ved=0CNUBEDMowAFqFwoTCLihh_KpvYYDFQAAAAAdAAAAABAD'></img>
                    </div>
                    <div className='right row'>
                        <h1>Got something to share?</h1>
                        <p>Share in our community and also checkout what others are thinking.</p>

                        <div className='items grid2'>
                        </div>

                        <form action=''>
                            <div className='flexSB'>
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                            </div>
                            <input type='text' placeholder='Topic' />
                            <textarea cols='30' rows='10'>
                                Create a blog here...
                            </textarea>
                            <button className='primary-btn'>POST</button>
                        </form>

                        {/* <h3>Follow us here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogCard
