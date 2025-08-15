"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Clock, DollarSign, Users, Briefcase } from "lucide-react"

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  salary: string
  description: string
  requirements: string[]
  posted: string
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Process Engineer",
    department: "Engineering",
    location: "Houston, TX",
    type: "Full-time",
    experience: "5+ years",
    salary: "$95,000 - $120,000",
    description:
      "Lead process optimization initiatives and support refinery operations with advanced engineering solutions.",
    requirements: [
      "Bachelor's degree in Chemical Engineering",
      "5+ years in petroleum refining",
      "Process simulation software experience",
      "Strong analytical and problem-solving skills",
    ],
    posted: "2024-01-15",
  },
  {
    id: "2",
    title: "Operations Supervisor",
    department: "Operations",
    location: "Houston, TX",
    type: "Full-time",
    experience: "7+ years",
    salary: "$85,000 - $105,000",
    description: "Supervise daily refinery operations and ensure safe, efficient production processes.",
    requirements: [
      "Bachelor's degree in Engineering or related field",
      "7+ years in refinery operations",
      "Leadership and team management experience",
      "Safety certification preferred",
    ],
    posted: "2024-01-12",
  },
  {
    id: "3",
    title: "Environmental Compliance Specialist",
    department: "Environmental & Safety",
    location: "Houston, TX",
    type: "Full-time",
    experience: "3+ years",
    salary: "$70,000 - $85,000",
    description: "Ensure compliance with environmental regulations and support sustainability initiatives.",
    requirements: [
      "Bachelor's degree in Environmental Science or Engineering",
      "3+ years in environmental compliance",
      "Knowledge of EPA regulations",
      "Strong communication skills",
    ],
    posted: "2024-01-10",
  },
  {
    id: "4",
    title: "Maintenance Technician",
    department: "Maintenance",
    location: "Houston, TX",
    type: "Full-time",
    experience: "2+ years",
    salary: "$55,000 - $70,000",
    description: "Perform preventive and corrective maintenance on refinery equipment and systems.",
    requirements: [
      "Technical degree or equivalent experience",
      "2+ years in industrial maintenance",
      "Mechanical and electrical skills",
      "Safety-focused mindset",
    ],
    posted: "2024-01-08",
  },
  {
    id: "5",
    title: "Data Analyst",
    department: "Technology",
    location: "Houston, TX",
    type: "Full-time",
    experience: "3+ years",
    salary: "$75,000 - $90,000",
    description: "Analyze operational data to identify trends and support decision-making processes.",
    requirements: [
      "Bachelor's degree in Data Science, Statistics, or related field",
      "3+ years in data analysis",
      "Proficiency in SQL, Python, or R",
      "Experience with data visualization tools",
    ],
    posted: "2024-01-05",
  },
  {
    id: "6",
    title: "Sales Representative",
    department: "Commercial",
    location: "New York, NY",
    type: "Full-time",
    experience: "4+ years",
    salary: "$80,000 - $100,000 + Commission",
    description: "Develop and maintain customer relationships while driving sales growth in assigned territories.",
    requirements: [
      "Bachelor's degree in Business or related field",
      "4+ years in B2B sales",
      "Experience in energy or chemical industry preferred",
      "Strong negotiation and communication skills",
    ],
    posted: "2024-01-03",
  },
]

const departments = [
  { id: "all", name: "All Departments" },
  { id: "engineering", name: "Engineering" },
  { id: "operations", name: "Operations" },
  { id: "environmental-safety", name: "Environmental & Safety" },
  { id: "maintenance", name: "Maintenance" },
  { id: "technology", name: "Technology" },
  { id: "commercial", name: "Commercial" },
]

export function JobListings() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment =
      selectedDepartment === "all" ||
      job.department.toLowerCase().replace(/\s+/g, "-").replace("&", "") === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept.id} value={dept.id}>
                  {dept.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <div>
        <p className="text-muted-foreground">
          Showing {filteredJobs.length} of {jobs.length} positions
        </p>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="bg-card hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl font-semibold text-card-foreground mb-2">{job.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-primary/10 text-primary">{job.type}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{job.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Experience: {job.experience}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{job.salary}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-sm">Key Requirements:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {job.requirements.slice(0, 3).map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      {req}
                    </li>
                  ))}
                  {job.requirements.length > 3 && (
                    <li className="text-xs text-muted-foreground/70">
                      +{job.requirements.length - 3} more requirements
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>Posted {formatDate(job.posted)}</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    View Details
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Apply Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No positions found matching your criteria.</p>
          <Button
            onClick={() => {
              setSearchTerm("")
              setSelectedDepartment("all")
            }}
            variant="outline"
            className="mt-4 bg-transparent"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
