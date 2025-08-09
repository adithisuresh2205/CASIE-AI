"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileText, Calculator, CheckCircle } from "lucide-react"
import DocumentProcessor from "@/components/document-processor"
import DataExtraction from "@/components/data-extraction"
import EmissionsCalculator from "@/components/emissions-calculator"
import ComplianceDashboard from "@/components/compliance-dashboard"
import ReportGenerator from "@/components/report-generator"

export default function CarbonEmissionsAuditor() {
  const [activeTab, setActiveTab] = useState("upload")
  const [processedDocuments, setProcessedDocuments] = useState([])
  const [extractedData, setExtractedData] = useState([])
  const [emissionsData, setEmissionsData] = useState(null)
  const [complianceStatus, setComplianceStatus] = useState(null)

  const handleDocumentsProcessed = (documents) => {
    setProcessedDocuments(documents)
    setActiveTab("extraction")
  }

  const handleDataExtracted = (data) => {
    setExtractedData(data)
    setActiveTab("calculation")
  }

  const handleEmissionsCalculated = (data) => {
    setEmissionsData(data)
    setActiveTab("compliance")
  }

  const handleComplianceChecked = (status) => {
    setComplianceStatus(status)
    setActiveTab("reporting")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4"><center>CASIE AI</center></h1>
          <h1 className="text-1xl font-bold text-gray-900 mb-4">Carbon Auditing System for Industrial Emissions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automated GHG accounting using NLP and OCR to process invoices, extract emissions data, and generate ISO
            14064 compliant audit reports
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Upload className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h3 className="font-semibold">Document Processing</h3>
              <p className="text-sm text-gray-600">OCR & Digitization</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <FileText className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold">Data Extraction</h3>
              <p className="text-sm text-gray-600">BERT-based NLP</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calculator className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <h3 className="font-semibold">Emissions Calculation</h3>
              <p className="text-sm text-gray-600">GHG Protocol Standards</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h3 className="font-semibold">Compliance Check</h3>
              <p className="text-sm text-gray-600">ISO 14064 Validation</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="extraction">Extraction</TabsTrigger>
            <TabsTrigger value="calculation">Calculation</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="reporting">Reporting</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="mt-6">
            <DocumentProcessor onDocumentsProcessed={handleDocumentsProcessed} />
          </TabsContent>

          <TabsContent value="extraction" className="mt-6">
            <DataExtraction documents={processedDocuments} onDataExtracted={handleDataExtracted} />
          </TabsContent>

          <TabsContent value="calculation" className="mt-6">
            <EmissionsCalculator extractedData={extractedData} onEmissionsCalculated={handleEmissionsCalculated} />
          </TabsContent>

          <TabsContent value="compliance" className="mt-6">
            <ComplianceDashboard emissionsData={emissionsData} onComplianceChecked={handleComplianceChecked} />
          </TabsContent>

          <TabsContent value="reporting" className="mt-6">
            <ReportGenerator emissionsData={emissionsData} complianceStatus={complianceStatus} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
