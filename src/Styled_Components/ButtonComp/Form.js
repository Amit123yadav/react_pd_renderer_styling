import React from 'react'
import { Input, Label, Div, Main, LabelText, Inputs, Password } from './StyledInput'
import { StyledButton, Rotate, SubmitButton } from './StyledButton'

const Form = () => {
    return (
        <Main>
            <Div>
                <form>

                    <Rotate>
                        <img src='../logo192.png' />
                    </Rotate>

                    <div>
                        <label>Name</label>
                        <Input type='text' defaultValue='@Amit Kumar' InputColor="palevioletred" />
                    </div>
                    <div>
                        <label>Email</label>
                        <Input type='email' defaultValue='amit@gamil.com' InputColor="palevioletred" />
                    </div>
                    <div>
                        <label>Password</label>
                        <Password InputColor="palevioletred" defaultValue='46543' />
                    </div>
                    <Label>
                        <Inputs type='checkbox' />
                        <LabelText $mode='Dark'>Car</LabelText>
                    </Label>
                    <Label>
                        <Inputs type='checkbox' defaultChecked />
                        <LabelText >Bus</LabelText>
                    </Label>
                    <div>
                        <SubmitButton>Submit</SubmitButton>
                        <StyledButton varient='outline'>Cancel</StyledButton>
                    </div>
                </form>
            </Div>
        </Main>
    )
}

export default Form