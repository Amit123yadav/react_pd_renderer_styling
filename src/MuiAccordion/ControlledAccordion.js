import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
const ControlledAccordion = () => {
    const [expended , setExpended] = useState(false)

    const handleChange = (panel) =>(isExpended , event) =>{
        setExpended(isExpended ? panel : false)
    }
    return (
        <div style={{margin :'2rem'}}>
            <Typography style={{marginBottom :'1rem'}}>Controlled Accordion</Typography>
            <Accordion expanded={expended === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                id='panel1-header'
                aria-controls='panel1-content'
                expandIcon={<ExpandMore/>}
                >
                    <Typography>Accordion1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expended === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                id='panel2-header'
                aria-controls='panel2-content'
                expandIcon={<ExpandMore/>}
                >
                    <Typography>Accordion2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expended === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                id='panel3-header'
                aria-controls='panel3-content'
                expandIcon={<ExpandMore/>}
                >
                    <Typography>Accordion3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expended === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                id='panel4-header'
                aria-controls='panel4-content'
                expandIcon={<ExpandMore/>}
                >
                    <Typography>Accordion4</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default ControlledAccordion