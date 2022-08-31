import React from 'react'
import Styled from 'styled-components'

function Contact() {
    const Contact = Styled.div`
        padding: 0 .5rem;
    `

    const H1 = Styled.h1`
        text-align: center;
        margin: 10rem auto;
        opacity: 0.7;
        border-bottom: 2px solid #000;
        width: fit-content;
    `
    const P = Styled.p`
        text-align: center;
        margin-bottom: 5rem;
    `
    const Box = Styled.div`
         display: flex;
         flex-direction: row;
        
    `
    const Boxcontent = Styled.div`
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: end;
    `
    const Content = Styled.textarea`
       
        padding: 1rem;
        background-color: #eee;
        width: 40%;
        margin-left: 2rem;
    `
    const Input = Styled.input`
        background-color: #eee;
        padding: 1rem;
        margin: 1rem 0;
        width: 50%;
        
    `
    const Button = Styled.button`
    display: block;
    padding: 1rem 2rem;
    border-radius: .5rem;
    background-color: #eee;
     margin: 4rem auto;
    background-color: blue;
    color: #fff;
    cursor: pointer;
    `

    return (
        <Contact>
            <div>
                <H1>LIÊN HỆ</H1>
                <P>Chúng tôi rất mong nhận được hồi âm từ bạn. Nếu bạn quan tâm đến việc bắt đầu một dự án mới hoặc cộng tác, hãy gửi cho chúng tôi một dòng thông qua biểu mẫu bên dưới và chúng tôi sẽ trả lời trong vòng 24 giờ.</P>
            </div>
            <Box>
                <Boxcontent>
                    <Input type="text" placeholder="Your name..."></Input>
                    <Input type="text" placeholder="Your email..."></Input>
                    <Input type="text" placeholder="Your phonenumber..."></Input>
                </Boxcontent>
                <Content
                    placeholder="Content..."
                >
                </Content>
            </Box>
            <Button>Send</Button>
        </Contact>
    )
}

export default Contact
