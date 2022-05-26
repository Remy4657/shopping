import React from 'react'
import Styled from 'styled-components'


function News() {
    const Wrapper = Styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        gap: 2rem;
        padding: 0 5rem;
    `
    const Box = Styled.div`
        display: flex;
        flex-direction: column;
        height: fit-content;
    `
    const Image = Styled.img`
       
        height: 30rem;
    `
    const Infor = Styled.div`
        
        padding: 0 1rem;
       
    `
    const H1 = Styled.h1`
        text-align: center;
        margin: 10rem auto;
        opacity: 0.7;
        border-bottom: 2px solid #000;
        width: fit-content;
    `
    const H3 = Styled.h3`
        
        margin: 2rem 0;
        opacity: 0.7;
    `
    const P = Styled.p`
        text-align: center;
        margin-bottom: 5rem;
    `
    const A = Styled.a`
        background-color: #000;
        color: #fff;
        padding: .5rem 2rem;
        width: fit-content;
        display: block;
        margin-top: 2rem;
        
    `
    return (
        <div>
            <H1>TIN TỨC</H1>
            <P>Giá cả thấp nhất thị trường và có nhiều ưu đãi đặc biệt dành cho khách hàng quen thuộc.</P>
            <Wrapper>
                <Box>
                    <Image src="http://mauweb.monamedia.net/karo/wp-content/uploads/2019/05/nes3.jpg" alt="" />
                    <Infor>
                        <H3>Ngọc trai-phụ kện đang được sao Việt mê mẩn</H3>
                        <p>Không phải ngẫu nhiên mà trang sức ngọc trai được các chuyên gia sắc đẹp đánh giá là sẽ lên ngôi và trở thành xu hướng trang sức cho năm 2018. Chính nhờ sự ưu ái của hàng loạt các mỹ nhân như “nữ hoàng ảnh lịch” Diễm My, Diễm My 9x, Hoa hậu H’Hen Niê, Á hậu Mâu Thủy, Á hậu Hoàng Thùy…</p>
                        <A href="#">Đọc thêm</A>
                    </Infor>
                    
                </Box>
                <Box>
                    <Image src="http://mauweb.monamedia.net/karo/wp-content/uploads/2019/05/news22.jpg" alt="" />
                    <Infor>
                        <H3>Ngọc trai-phụ kện đang được sao Việt mê mẩn</H3>
                        <p>Không phải ngẫu nhiên mà trang sức ngọc trai được các chuyên gia sắc đẹp đánh giá là sẽ lên ngôi và trở thành xu hướng trang sức cho năm 2018. Chính nhờ sự ưu ái của hàng loạt các mỹ nhân như “nữ hoàng ảnh lịch” Diễm My, Diễm My 9x, Hoa hậu H’Hen Niê, Á hậu Mâu Thủy, Á hậu Hoàng Thùy…</p>
                        <A href="#">Đọc thêm</A>

                    </Infor>
                </Box>
                <Box>
                    <Image src="http://mauweb.monamedia.net/karo/wp-content/uploads/2019/05/news11.jpg" alt="" />
                    <Infor>
                        <H3>Ngọc trai-phụ kện đang được sao Việt mê mẩn</H3>
                        <p>Không phải ngẫu nhiên mà trang sức ngọc trai được các chuyên gia sắc đẹp đánh giá là sẽ lên ngôi và trở thành xu hướng trang sức cho năm 2018. Chính nhờ sự ưu ái của hàng loạt các mỹ nhân như “nữ hoàng ảnh lịch” Diễm My, Diễm My 9x, Hoa hậu H’Hen Niê, Á hậu Mâu Thủy, Á hậu Hoàng Thùy…</p>
                        <A href="#">Đọc thêm</A>

                    </Infor>
                </Box>
            </Wrapper>
        </div>
    )
}

export default News
