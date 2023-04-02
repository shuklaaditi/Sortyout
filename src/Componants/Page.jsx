import { Button,Grid, Typography,Box, Stack,Card, CardContent, Container, CardMedia, Avatar } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from "react";
export const Page=()=>{
    return(
        <div>
        <div style={{backgroundColor:" #00563b"}}>
            <Box height={2+'vh'} />
            <Box height={15+'vh'}>
            <Grid container spacing={2} style={{position:"fixed",zIndex:1 ,bgcolor:"white" }}>
              <Grid item xs={6} zIndex={1} >
              <Button variant="text" fullWidth sx={{color:"white",fontSize:20, fontWeight:"bold"}} > Whereby</Button>
              </Grid>
              <Grid item xs={1} >
              <Button variant="text" fullWidth sx={{color:"white"}}> Product <ArrowDropDownIcon/> </Button>
              </Grid>
              <Grid item xs={1}> 
              <Button variant="text" fullWidth sx={{color:"white"}}>
                Pricing  <ArrowDropDownIcon/>  </Button>
              </Grid>
              <Grid item xs={1}> 
              <Button variant="text" fullWidth sx={{color:"white"}} >
               Support </Button>
              </Grid>
              <Grid item xs={1}> 
              <Button variant="text" fullWidth sx={{color:"white"}}>
               Log in </Button>
              </Grid>
              <Grid item xs={1.5} > 
              <Button variant="text" sx={{bgcolor:"white",borderRadius:17+'%',height:6+'vh'}} fullWidth >
               Try for free </Button>
              </Grid>
            </Grid>
            </Box>
            <Grid container spacing={2}>
             <Button variant="contained" sx={{marginLeft:90+'vh'}}>NEW FEATURE</Button><br/>
             </Grid> <Box height={2+'vh'}/>
             
             <Grid>
              
             <Typography variant="h3" sx={{ flexGrow: 1 }} textAlign="center" color={"white"}>
     Hybrid meetings that just work
        </Typography> 
         <Stack direction="row">
        <Typography variant="h6" sx={{ flexGrow: 1,marginLeft:13+'vh' }} textAlign="center" color={"white"} marginTop={2+'vh'} >
        Our groundbreaking co-location groups give your distributed team hybrid meetings that feel like you’re <br/>
         all in the same room. No echo. No expensive hardware.
  
        </Typography>  <Card sx={{marginRight:20+'vh',backgroundColor:" #00563b"}}><CardMedia sx={{height:100+'px',width:150+'px'}}
        image="https://d2qulvgqu65efe.cloudfront.net/assets/illustrations/bird-128.png"
        /></Card></Stack>
          </Grid>
          <Box alignItems="center">
          <Box height={5+'vh'}/>
          <video  autoPlay controls width={700}  style={{marginLeft:450+'PX'}} >
          <source src="//videos.ctfassets.net/1t4zag4zjt00/69criCoooY8z9CnQhxKwGn/87920b239c4d4d23a70903c2f6ed1902/Co-location_home.mp4" type="video/mp4" />
        </video>
         </Box>
         <Grid item xs={2} >
         <Button variant="outlined" style={{color:"white",marginLeft:750+'PX',marginTop:2+'vh'}}>Learn more</Button>
         </Grid>
             <Card sx={{backgroundColor:" #00563b"}}>
              <CardMedia sx={{height:5+'vh' ,width:500+'px',marginLeft:80+'vh'}}
    image="//images.ctfassets.net/1t4zag4zjt00/6qE1QA8kcDWT4L7gBUWwIp/b0063ac20cdbfdf80ff560b56aef024d/reviews.png"/>
            </Card>
         </div>
         
        <Card sx={{height:40+'vh'}}>
          <CardContent>
            <Box height={6+'vh'}/>
          <Typography variant="h5" sx={{ flexGrow: 1, textAlign:"center" }}   >
      Trusted by 5+ million people at companies like
        </Typography> <Box height={7+'vh'}/>
        <Stack direction="row">
        <Typography variant="h3" sx={{ flexGrow: 1, textAlign:"center" }}   >
        ogilvy
        </Typography>
        <Typography variant="h3" sx={{ flexGrow: 1, textAlign:"center" }}   >
        Hubspot
        </Typography>
        <Typography variant="h3" sx={{ flexGrow: 1, textAlign:"center" }}   >
        Netflix
        </Typography>
        <Typography variant="h3" sx={{ flexGrow: 1, textAlign:"center" }}   >
        Ikea
        </Typography>
        <Typography variant="h3" sx={{ flexGrow: 1, textAlign:"center" }}   >
        Spotify
        </Typography>
        <Typography variant="h3" sx={{ flexGrow: 1, textAlign:"center" }}   >
        Shopify
        </Typography>
        </Stack>
          </CardContent>
        </Card>
      <Container sx={{height:100+'vh',padding:""}}>
        {/* <Box sx={{height:100+'vh',bgcolor:"GrayText"}}> */}
        <Stack direction="row">
            <Card sx={{height:110+'vh',width:75+'vh', textAlign:"center"}}>
                <Box height={6+'vh'} />
                <CardContent>
              <Typography color="blue">Whereby Meetings</Typography>   
              <Box height={6+'vh'} />    
              <Typography variant="h4"  >
                Have better video calls
        </Typography>

        <Card><Box height={2+'vh'}/>
        <Typography variant="h6"  >
              your_website.com
        </Typography> 
          <CardMedia  sx={{height:310}} 
          image="//images.ctfassets.net/1t4zag4zjt00/3wgObXjORTteYX0NIhV6xx/24f74c246f075f5fecebdbd7b5f0e97d/img_meetings.png?w=480&q=100"/>
        </Card> <Box height={3+'vh'}/>
        <Typography variant="h6"  >
        Host simple, beautiful video calls to connect with <br/> 
        anyone, anywhere, with just a link. No downloads, no hassle.       
         </Typography> <Box height={3+'vh'}/>
        <Grid item xs={4}>
          <Button variant="contained">Try embeded for me</Button>
        </Grid> <br/>
        <Typography> <a>or learn more </a></Typography>
                </CardContent>
            </Card>
            
            <Card  sx={{height:110+'vh',width:75+'vh' ,marginLeft:2.5+'vh', textAlign:"center"}}>
            <Box height={6+'vh'} /><CardContent>
                <Typography color="blue">Whereby Embedded</Typography> 
                <Box height={4+'vh'} />       
                <Typography variant="h4"  >
                Integrate real-time <br/> video into your product
        </Typography> 
        <Card><Box height={2+'vh'}/>
        <Typography variant="h6"  >
              your_website.com
        </Typography> 
          <CardMedia  sx={{height:310}} 
          image="//images.ctfassets.net/1t4zag4zjt00/5usT51eVs1giCYxGQ1LaUP/58c7e7f5f17a28531b3ce6f2969cf374/img_embedded.png?w=480&q=100"/>
        </Card> <Box height={3+'vh'}/>
        <Typography variant="h6"  >
        Integrate customizable video calls into your product, app, or website in minutes.
         For businesses building applications that connect people.
        </Typography> <Box height={3+'vh'}/>
        <Grid item xs={4}>
          <Button variant="contained">Try embeded for me</Button>
        </Grid> <br/>
        <Typography> <a>or learn more </a></Typography>
                </CardContent>
            </Card> </Stack>
            </Container>
            <Box height={22+'vh'}></Box>
            <Container sx={{height:80+'vh',bgcolor:"pink",borderRadius:5+'vh',textAlign:"center"}}>
              <Card sx={{padding:5+'vh',bgcolor:"pink"}}>
                 <Typography variant="h3">miro</Typography>
                  </Card>
                 <Typography padding={4+'vh'} variant="h3">
                  “Whereby makes it super simple for <br/>collaborating teams to jump on a video call. A 
                  <br/>single meeting link shared instantly ensures a moment of creativity is never lost.”</Typography>
             <Card sx={{width:50+'vh',marginLeft:350+'px',bgcolor:"pink"}}>
              <CardContent>
              <Stack  direction="row">
              <Avatar 
              src="//images.ctfassets.net/1t4zag4zjt00/1PAWiGf9TKfRMNIqZik5oN/d46a911087e0593a3996047ad8458dad/Andrey_Khusid__1_.webp?w=800&q=50"/>
               <Typography sx={{marginLeft:10+'vh'}}>Andrey Khusid
               <br/>CEO-Miro</Typography>
               <Card><CardMedia image=""/></Card>
               </Stack>
               </CardContent></Card>
            </Container><Box height={20+'vh'}/>
            <Card sx={{textAlign:"center"}}><CardContent>
              <Typography variant="h3">Video calls made easy</Typography>
              <Typography style={{marginTop:8+'vh'}} variant="h6">Whereby's the easiest 
              way to connect over video – with no app or software <br/>download required. Connect with anyone, anywhere
               with zero hassle.</Typography>
              </CardContent></Card>
              <Container>
                <Stack direction="row">
                  <Card sx={{height:100+'vh',width:70+'vh'}}><CardContent>
                  <video  autoPlay controls  height={300} width={500}>
          <source src="https://videos.ctfassets.net/1t4zag4zjt00/565wIEiGpOfBnOTC4wkCTw/50d622aa3bc757fd89714fee52c73198/Customize.mp4" type="video/mp4" />
        </video>
        <h3>Customization</h3> <p>Personalize your Whereby room with custom names, URLs, and branding.</p>
        {/* <video  autoPlay controls  height={300} width={500}>
          <source src="//images.ctfassets.net/1t4zag4zjt00/3vNZJVVvOk4zCnXBOg0usn/a0d4ccfdbc575cea9987ad3acd5f1628/Reactions.jpg" type="video/mp4" />
        </video> */}
 <Card> <CardContent>
<video  autoPlay controls  height={300} width={500}>
          <source src="//images.ctfassets.net/1t4zag4zjt00/3vNZJVVvOk4zCnXBOg0usn/a0d4ccfdbc575cea9987ad3acd5f1628/Reactions.jpg" type="video/mp4" />
        </video> </CardContent> </Card>
                    </CardContent></Card>
                  <Card sx={{height:100+'vh',width:70+'vh',marginLeft:15+'vh'}}>
            <CardContent> 
           <video  autoPlay controls  height={300} width={500}>
          <source src="//images.ctfassets.net/1t4zag4zjt00/2YJd7k5JpPgnEeuEasIFqX/263c909544b35fe7a007f83d72d751d6/Miro.jpg" type="video/mp4" />
        </video>  
        <h3>Breakouts</h3> <p>Run efficient classes, events, and workshops with Breakout <br/>Groups.</p>
        <video  autoPlay controls width={500}  height={300}  >
          <source src="//images.ctfassets.net/1t4zag4zjt00/15sDqIQjKfljGq2Sj8bybi/38faf4241405ce52653d3cef33cf50a9/Breakouts.jpg" type="video/mp4" />
        </video>
                    </CardContent></Card>
                </Stack> 
              </Container>
              <Card padding={10+'vh'} sx={{height:40+'vh'}}>
                <Grid item xs={2} ><Button variant="contained"  style={{marginTop:15+'vh',marginLeft:700+'px'}}>Try for free</Button> </Grid></Card>
                <Container>
                <Card sx={{height:80+'vh'}}><CardContent>
                <Stack direction="row">
                  <Card sx={{height:60+'vh',width:70+'vh'}}>
                    <CardContent padding={3+'vh'}>
                    <h1 style={{fontStyle:"italic",marginTop:5+'vh'}}>Great culture is key to building <br/> a great company</h1>
                 <p style={{marginTop:5+'vh'}}> Founded in privacy-friendly Norway, we try to do business the right way. Check out our transparent progression framework, thoughts on remote work culture, and parental leave policies.</p>
                 <Button variant="outlined" style={{marginTop:6+'vh',marginleft:5+'vh'}}>Get known to us</Button>
                 </CardContent> </Card>
                  <Card sx={{height:60+'vh',width:70+'vh',marginLeft:10+'vh'}}>
                    <CardMedia sx={{height:380}}  image="//images.ctfassets.net/1t4zag4zjt00/1a9CyAyU2z22YTRwWzZXsj/1e3e6ba8ba7eac2320969d131c3923c6/get-to-know-us.webp"/>
                  </Card>
                  </Stack></CardContent></Card>
                  </Container>
    
                      <Card sx={{bgcolor:"pink"}}> 
                      <CardContent>
                        <Stack direction="row">
                          <Card sx={{marginLeft:4+'vh',bgcolor:"pink"}}>
                      <CardMedia sx={{height:400+'px',width:450+'px'}} image="https://d2qulvgqu65efe.cloudfront.net/assets/illustrations/scene-lady-talking-1024.png"/>
                        </Card> 
                      <Card sx={{marginLeft:15+'vh',bgcolor:"pink"}}>
                        <CardContent>
                          <Typography variant="h4" sx={{marginTop:5+'vh'}}>
                            get started today
                            </Typography>
                      <Button variant="contained"  sx={{marginTop:9+'vh',marginLeft:4+'vh'}}>Try for free
                      </Button>
                      </CardContent>
                      </Card>
                      <Card sx={{marginLeft:15+'vh',bgcolor:"pink"}}>
                       <CardMedia sx={{height:400+'px',width:450+'px'}} image="https://d2qulvgqu65efe.cloudfront.net/assets/illustrations/scene-lady-talking-1024.png"/>
                       </Card> </Stack> 
                       </CardContent></Card>
                    
                     <Container>
                  <Card sx={{height:100+'vh'}}>
                    <CardContent>
                    <Stack direction="row">
                     <Card sx={{width:170+'px',height:70+'vh'}}><CardContent>
                     <Typography variant="h5">ABout</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">ABout us</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">vision</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">careerst</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">press</Typography> <Box height={2+'vh'}/>
                      </CardContent></Card>
                     <Card sx={{width:170+'px',marginLeft:3+'vh'}}><CardContent>
                     <Typography variant="h5">Product</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">Embedded</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">Meetings</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">What's New</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">Status</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">Mettings</Typography> <Box height={2+'vh'}/>
                      </CardContent></Card>
                     <Card sx={{width:170+'px',marginLeft:3+'vh'}}>
                      <CardContent>
                      <Typography variant="h5">Pricing</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6"> For Embedded</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6"> For Embedded</Typography> <Box height={2+'vh'}/>
                      </CardContent></Card>
                     <Card sx={{width:170+'px',marginLeft:3+'vh'}}><CardContent>
                     <Typography variant="h5">Sociel </Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">Blog</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">Twitter</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">Linkedin</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">instagram</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">facebook</Typography> <Box height={2+'vh'}/>
                      </CardContent></Card>
                     <Card sx={{width:170+'px',marginLeft:3+'vh'}}><CardContent>
                     <Typography variant="h5">Support </Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">getting started</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">support center</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6"> term of services</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">cookie policies</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">cookie settings</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">CDPR statement</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">Secuirity</Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">Sidemap</Typography> <Box height={2+'vh'}/>
                      </CardContent></Card>
                     <Card sx={{width:170+'px',marginLeft:3+'vh'}}><CardContent>
                     <Typography variant="h5">Get in touch </Typography> <Box height={2+'vh'}/>
                      <Typography variant="h6">contact support</Typography> <Box height={2+'vh'}/>
                      </CardContent></Card>
                     </Stack>
                    </CardContent>
                  </Card> </Container> 
        </div>
    )
}