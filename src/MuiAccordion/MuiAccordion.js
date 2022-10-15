import React from 'react'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { ExpandMore } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root : {
        marginBottom : '1rem'
    }
})
const MuiAccordion = () => {
    const classes = useStyles()

    return (
        <div style={{ margin: '2rem' }}>
            <Typography className={classes.root}>Simple Accordion</Typography>
            <Accordion>
                <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMore />}>
                    <Typography>
                        Accordion1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <Accordion>
                            <AccordionSummary id='inner1-header' aria-controls='inner1-content' expandIcon={<ExpandMore />}>
                                <Typography>
                                    inner1
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary id='inner2-header' aria-controls='inner2-content' expandIcon={<ExpandMore />}>
                                <Typography>
                                    inner2
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary id='inner3-header' aria-controls='inner3-content' expandIcon={<ExpandMore />}>
                                <Typography>
                                    inner3
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMore />}>
                    <Typography>
                        Accordion2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <Accordion>
                            <AccordionSummary
                                id='inner1-header'
                                aria-controls='inner1-content'
                                expandIcon={<ExpandMore />}
                            >
                                inner1
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                            id='inner1Part-header'
                                            aria-controls='inner1Part-content'
                                            expandIcon={<ExpandMore />}
                                        >
                                            inner1 part
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            id='inner2Part-header'
                                            aria-controls='inner2Part-content'
                                            expandIcon={<ExpandMore />}
                                        >
                                            inner2 part
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            id='inner3Part-header'
                                            aria-controls='inner3Part-content'
                                            expandIcon={<ExpandMore />}
                                        >
                                            inner3 part
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMore />}>
                    <Typography>
                        Accordion3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <Accordion>
                            <AccordionSummary id='inner1-header' aria-controls='inner1-content' expandIcon={<ExpandMore />}>
                                inner1
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <Accordion>
                                        <AccordionSummary id='inner1Part-header' aria-controls='inner1Part-content' expandIcon={<ExpandMore />}>
                                            #inner1 part
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>
                                                <Accordion>
                                                    <AccordionSummary id='inner1Part1-header' aria-controls='inner1Part1-content' expandIcon={<ExpandMore />}>
                                                        #inner1 part1
                                                    </AccordionSummary>
                                                    <AccordionSummary>
                                                       <div>
                                                       <Accordion>
                                                            <AccordionSummary id='inner1Part2-header' aria-controls='inner1Part2-content' expandIcon={<ExpandMore />}>
                                                                #inner1 part2
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography>
                                                                    Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                                                                </Typography>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                        <Accordion>
                                                            <AccordionSummary id='inner1Part3-header' aria-controls='inner1Part3-content' expandIcon={<ExpandMore />}>
                                                                #inner1 part3
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography>
                                                                    Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                                                                </Typography>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                        <Accordion>
                                                            <AccordionSummary id='inner1Part4-header' aria-controls='inner1Part4-content' expandIcon={<ExpandMore />}>
                                                                #inner1 part4
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography>
                                                                    Lorem ipsum dolor sit amet. Id porro molestiae et nemo nulla est consequatur autem et officiis commodi est omnis laborum sit rerum repudiandae sed blanditiis aliquam. Quo dolorem placeat hic aspernatur quia eum necessitatibus sequi sit sint tempore ut eligendi neque in incidunt harum ad nostrum dolorem.
                                                                </Typography>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                       </div>
                                                    </AccordionSummary>
                                                </Accordion>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MuiAccordion