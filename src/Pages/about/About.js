import React from 'react'

import styles from './About.module.css'

function About() {

    return (
        <div>
            <h1 className={styles.header}>TỔNG QUAN VỀ CÔNG TY</h1>
            <div>
                <p className={styles.p_text}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.”
                </p>
            </div>


            <div className={styles.wrapper}>
                <div className={styles.div_text}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </div>
                <div>
                    <img src="https://chonthuonghieu.com/wp-content/uploads/listing-uploads/gallery/2021/04/an-phuoc-vt-4.jpeg" alt="" />
                </div>
            </div>

            <div>
                <h1 className={styles.header}>HỆ THỐNG CỬA HÀNG</h1>
                <p className={styles.p_text}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                <div className={styles.grid}>
                    <div className={styles.box}>
                        <img src="http://mauweb.monamedia.net/anphuoc/wp-content/uploads/2018/01/1.jpg" alt="" />
                        <div className={styles.infor}>
                            <h3 className={styles.h3}>Ngọc trai-phụ kện đang được sao Việt mê mẩn</h3>
                            <p>Không phải ngẫu nhiên mà trang sức ngọc trai được các chuyên gia sắc đẹp đánh giá là sẽ lên ngôi và trở thành xu hướng trang sức cho năm 2018. Chính nhờ sự ưu ái của hàng loạt các mỹ nhân như “nữ hoàng ảnh lịch” Diễm My, Diễm My 9x, Hoa hậu H’Hen Niê, Á hậu Mâu Thủy, Á hậu Hoàng Thùy…</p>
                            <a className={styles.link} href="#">Đọc thêm</a>
                        </div>

                    </div>
                    <div className={styles.box}>
                        <img src="http://mauweb.monamedia.net/anphuoc/wp-content/uploads/2018/01/2.jpg" alt="" />
                        <div className={styles.infor}>
                            <h3 className={styles.h3}>Ngọc trai-phụ kện đang được sao Việt mê mẩn</h3>
                            <p>Không phải ngẫu nhiên mà trang sức ngọc trai được các chuyên gia sắc đẹp đánh giá là sẽ lên ngôi và trở thành xu hướng trang sức cho năm 2018. Chính nhờ sự ưu ái của hàng loạt các mỹ nhân như “nữ hoàng ảnh lịch” Diễm My, Diễm My 9x, Hoa hậu H’Hen Niê, Á hậu Mâu Thủy, Á hậu Hoàng Thùy…</p>
                            <a className={styles.link} href="#">Đọc thêm</a>

                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src="http://mauweb.monamedia.net/anphuoc/wp-content/uploads/2018/01/3.jpg" alt="" />
                        <div className={styles.infor}>
                            <h3 className={styles.h3}>Ngọc trai-phụ kện đang được sao Việt mê mẩn</h3>
                            <p>Không phải ngẫu nhiên mà trang sức ngọc trai được các chuyên gia sắc đẹp đánh giá là sẽ lên ngôi và trở thành xu hướng trang sức cho năm 2018. Chính nhờ sự ưu ái của hàng loạt các mỹ nhân như “nữ hoàng ảnh lịch” Diễm My, Diễm My 9x, Hoa hậu H’Hen Niê, Á hậu Mâu Thủy, Á hậu Hoàng Thùy…</p>
                            <a className={styles.link} href="#">Đọc thêm</a>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About
