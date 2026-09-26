import React from 'react'
import Card from './components/card'


function App() {

  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    brandName: "Google",
    jobPost: "Senior Frontend Engineer",
    employmentType: "Full-time",
    experienceLevel: "Senior level",
    price: "$120/hr",
    place: "Mountain View, CA",
    datePosted: "2 days ago"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    brandName: "Spotify",
    jobPost: "UI/UX Designer",
    employmentType: "Part-time",
    experienceLevel: "Junior level",
    price: "$45/hr",
    place: "Remote",
    datePosted: "5 days ago"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    brandName: "Netflix",
    jobPost: "Backend Systems Lead",
    employmentType: "Full-time",
    experienceLevel: "Senior level",
    price: "$150/hr",
    place: "Los Gatos, CA",
    datePosted: "1 day ago"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    brandName: "Airbnb",
    jobPost: "Content Assistant",
    employmentType: "Part-time",
    experienceLevel: "Beginner level",
    price: "$25/hr",
    place: "San Francisco, CA",
    datePosted: "5 days ago"
  },
  {
    brandLogo: "https://logo.clearbit.com/stripe.com",
    brandName: "Stripe",
    jobPost: "Senior Infrastructure Architect",
    employmentType: "Full-time",
    experienceLevel: "Senior level",
    price: "$135/hr",
    place: "Remote",
    datePosted: "3 days ago"
  },
  {
    brandLogo: "https://logo.clearbit.com/shopify.com",
    brandName: "Shopify",
    jobPost: "E-commerce Support Specialist",
    employmentType: "Part-time",
    experienceLevel: "Beginner level",
    price: "$22/hr",
    place: "Toronto, Canada",
    datePosted: "5 days ago"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    brandName: "Adobe",
    jobPost: "Motion Graphics Artist",
    employmentType: "Full-time",
    experienceLevel: "Junior level",
    price: "$60/hr",
    place: "San Jose, CA",
    datePosted: "4 days ago"
  },
  {
    brandLogo: "https://logo.clearbit.com/slack.com",
    brandName: "Slack",
    jobPost: "QA Tester",
    employmentType: "Part-time",
    experienceLevel: "Junior level",
    price: "$35/hr",
    place: "Remote",
    datePosted: "5 days ago"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    brandName: "Microsoft",
    jobPost: "Principal AI Researcher",
    employmentType: "Full-time",
    experienceLevel: "Senior level",
    price: "$160/hr",
    place: "Redmond, WA",
    datePosted: "Just now"
  },
  {
    brandLogo: "https://logo.clearbit.com/figma.com",
    brandName: "Figma",
    jobPost: "Community Intern",
    employmentType: "Part-time",
    experienceLevel: "Beginner level",
    price: "$20/hr",
    place: "New York, NY",
    datePosted: "5 days ago"
  }
];
  return (
    <div className='parent'>
      {jobs.map(function(val){

        return <Card brandName={val.brandName} jobPost={val.jobPost} price={val.price} place={val.place}/>
      })}
      
    </div>
  )
}

export default App