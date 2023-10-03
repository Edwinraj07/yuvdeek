import logo from './logo.svg';
import './App.css';
import Side_Nav from './components/Side_Nav';
import Nav_Bar from './components/Nav_Bar';
import Main from './components/main';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './components/Css/main.css'

import Nav4 from './components/pages/nav4';
import Footer from './components/pages/Footer';
import Userpage from './components/pages/userpage';
import ProgrammesWithSyllabusRevision from './components/pages/ProgrammesWithSyllabusRevision';
import RevisionOfCurricula from './components/pages/RevisionOfCurricula';
import CoursesHavingFocusOnEmployability from './components/pages/CoursesHavingFocusOnEmployability';
import { NewCoursesIntroduced } from './components/AcademicFlexibility/NewCoursesIntroduced';
import { ElectiveCourseSyste } from './components/AcademicFlexibility/ElectiveCourseSyste';
import StudentsEnrolledInValueAddedCourses from './components/CurriculumEnrichment.js/StudentsEnrolledInValueAddedCourses';
import { StudentUndertakingFieldProjectsInternshipsStudentProjects } from './components/CurriculumEnrichment.js/StudentUndertakingFieldProjectsInternshipsStudentProjects';
import { ValueAddedCoursesOfferedBy } from './components/CurriculumEnrichment.js/ValueAddedCoursesOfferedBy';
import { CrossCuttingIssues } from './components/CurriculumEnrichment.js/CrossCuttingIssues';

import { IT_INTEGRATION_AND_REFORMS } from './components/EvaluativeProcessAndReforms/IT_INTEGRATION_AND_REFORMS';
import { STUDENT_COMPLAINTS_GRIEVANCES } from './components/EvaluativeProcessAndReforms/STUDENT_COMPLAINTS_GRIEVANCES';
import { DECLARATION_OF_RESULTS } from './components/EvaluativeProcessAndReforms/DECLARATION_OF_RESULTS';
import { EXPERIENCE_OF_FULL_TIME_TEACHERS } from './components/TeacherProfileAndQuality/EXPERIENCE_OF_FULL_TIME_TEACHERS';
import { FULL_TIME_TEACHERS_WITH_PHD } from './components/TeacherProfileAndQuality/FULL_TIME_TEACHERS_WITH_PHD';
import { FULL_TIME_TEACHERS_AGAINST_SANCTIONED_POSTS } from './components/TeacherProfileAndQuality/FULL_TIME_TEACHERS_AGAINST_SANCTIONED_POSTS';
import { PREPARATION_AND_ADHERENCE_OF_ACADEMIC_CALENDAR_AND_TEACHING_PLANS } from './components/TeachingLearningProcess/PREPARATION_AND_ADHERENCE_OF_ACADEMIC_CALENDAR_AND_TEACHING_PLANS';
import { RATIO_OF_STUDENTS_TO_MENTOR } from './components/TeachingLearningProcess/RATIO_OF_STUDENTS_TO_MENTOR';
import { ICT_ENABLED_TOOLS_FOR_EFFECTIVE_TEACHING_AND_LEARNING_PROCESS } from './components/TeachingLearningProcess/ICT_ENABLED_TOOLS_FOR_EFFECTIVE_TEACHING_AND_LEARNING_PROCESS';
import { STUDENT_FULL_TIME_TEACHER_RATIO } from './components/CateringToStudentDiversity/STUDENT_FULL_TIME_TEACHER_RATIO';
import { LEARNING_LEVELS_OF_THE_STUDENTS_AND_SPECIAL_PROGRAMMES_ORGANIZED } from './components/CateringToStudentDiversity/LEARNING_LEVELS_OF_THE_STUDENTS_AND_SPECIAL_PROGRAMMES_ORGANIZED';
import { AVERAGE_PERCENTAGE_OF_SEATS_FILLED_AGAINST_RESERVED_CATEGORIES } from './components/StudentEnrolmentAndProfile/AVERAGE_PERCENTAGE_OF_SEATS_FILLED_AGAINST_RESERVED_CATEGORIES';
import { AVERAGE_ENROLMENT_PERCENTAGE } from './components/StudentEnrolmentAndProfile/AVERAGE_ENROLMENT_PERCENTAGE';
import { FEEDBACK_ANALYSIS } from './components/FeedbackSystem/FEEDBACK_ANALYSIS';
import { STUDENT_CENTRIC_METHODS } from './components/TeachingLearningProcess/STUDENT_CENTRIC_METHODS';
import { STRUCTURED_FEEDBACK_FOR_DESIGN_AND_REVIEW_OF_SYLLABUS } from './components/FeedbackSystem/STRUCTURED_FEEDBACK_FOR_DESIGN_AND_REVIEW_OF_SYLLABUS';
import { PO_PSO_CO } from './components/StudentPerformanceAndLearningOutcomes/PO_PSO_CO';
import { AttainmentOfOutcomes } from './components/StudentPerformanceAndLearningOutcomes/AttainmentOfOutcomes';
import { PassPercentageOfStudents } from './components/StudentPerformanceAndLearningOutcomes/PassPercentageOfStudents';
import { StudentSatisfactionSurvey } from './components/StudentSatisfactionSurvey/StudentSatisfactionSurvey';
import { ResearchPromotionPolicy311 } from './components/PromotionOfResearchAndFacilities/ResearchPromotionPolicy311';
import { SeedMoney312 } from './components/PromotionOfResearchAndFacilities/SeedMoney312';
import { TeachersAwardedFellowship313 } from './components/PromotionOfResearchAndFacilities/TeachersAwardedFellowship313';
import { GrantsForResearchProjects321 } from './components/ResourceMobilizationForResearch/GrantsForResearchProjects321';
import { ResearchProjects322 } from './components/ResourceMobilizationForResearch/ResearchProjects322';
import { ResearchGuides323 } from './components/ResourceMobilizationForResearch/ResearchGuides323';
import { DepartmentsHavingResearchProjects324 } from './components/ResourceMobilizationForResearch/DepartmentsHavingResearchProjects324';
import { EcoSystemForInnovationCreationTransferOfKnowledge331 } from './components/InnovationEcosystem/EcoSystemForInnovationCreationTransferOfKnowledge331';
import { WorkshopsSeminarsOnResearchMethodologyIPREntrepreneurshipSkillDevelopment332 } from './components/InnovationEcosystem/WorkshopsSeminarsOnResearchMethodologyIPREntrepreneurshipSkillDevelopment332';
import { CodeOfEthics } from './components/ResearchPublicationsAndAwards/CodeOfEthics';
import { Registered } from './components/ResearchPublicationsAndAwards/Registered';
import { ResearchPapersInJournalsNotifiedOnWebsite } from './components/ResearchPublicationsAndAwards/ResearchPapersInJournalsNotifiedOnWebsite';
import { BooksAndChaptersInEditedvolumesBooksPublishedAndPapersinNationalInternationalConferenceProceedings } from './components/ResearchPublicationsAndAwards/BooksAndChaptersInEditedvolumesBooksPublishedAndPapersinNationalInternationalConferenceProceedings';
import AverageCitationIndex from './components/ResearchPublicationsAndAwards/AverageCitationIndex';
import { H_Index } from './components/ResearchPublicationsAndAwards/H_Index';

import { RevenueGeneratedFromConsultancyAndCorporateTraining } from './components/Consultancy/RevenueGeneratedFromConsultancyAndCorporateTraining';
import { DevelopingFacilitiesTrainingTeachersAndStaffForUndertakingConsultancy } from './components/Consultancy/DevelopingFacilitiesTrainingTeachersAndStaffForUndertakingConsultancy';
import { ExtensionActivitiesInNeighbourhoodCommunity } from './components/ExtensionActivities/ExtensionActivitiesInNeighbourhoodCommunity';
import { AwardAndRecognitions } from './components/ExtensionActivities/AwardAndRecognitions';
import { ExtensionAndOutreachProgrammeConductedByTheInstitution } from './components/ExtensionActivities/ExtensionAndOutreachProgrammeConductedByTheInstitution';
import { StudentsParticipation } from './components/ExtensionActivities/StudentsParticipation';
import { CollaborativeActivities } from './components/Collaboration/CollaborativeActivities';
import { FunctionalMoUs } from './components/Collaboration/FunctionalMoUs';
import { InfrastructureAndPhysicalFacilities } from './components/PhysicalFacilities/InfrastructureAndPhysicalFacilities';
import { CulturalSportsAndGamesFacilities } from './components/PhysicalFacilities/CulturalSportsAndGamesFacilities';
import { ICtEnabledClassroomAndSeminarHalls } from './components/PhysicalFacilities/ICtEnabledClassroomAndSeminarHalls';
import { InfrastructureAugmentation } from './components/PhysicalFacilities/InfrastructureAugmentation';
import { InfrastructureAndServicesOfLibrarySubscriptionAndMembershipDetailsAndLibraryUsage } from './components/LibraryAsALearningResource/InfrastructureAndServicesOfLibrarySubscriptionAndMembershipDetailsAndLibraryUsage';
import { SubscriptionAndMembershipDetails } from './components/LibraryAsALearningResource/SubscriptionAndMembershipDetails';
import { PurchaseOfBooksBooksSubscriptionToJournalsEJournals } from './components/LibraryAsALearningResource/PurchaseOfBooksBooksSubscriptionToJournalsEJournals';

function App() {
  return (
    <>
   
    <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={[<Nav_Bar/>, <Side_Nav/>,  <Main/>,<Footer/>]}
          />
           <Route
            path="/userpage"
            element={[<Nav_Bar/>, <Side_Nav/>,  <Userpage/> ,<Footer/>]}
          />

         <Route
            path="/RevisionOfCurricula"
            element={[<Nav_Bar/>, <Side_Nav/>,  <RevisionOfCurricula/> ,<Footer/>]}
          />
          <Route
            path="/nav"
            element={[<Nav_Bar/>, <Side_Nav/>,<Nav4/> ,<Footer/>]}
          />
          <Route
            path="/ProgrammesWithSyllabusRevision"
            element={[<Nav_Bar/>, <Side_Nav/>,<ProgrammesWithSyllabusRevision/> ,<Footer/>]}
          />
      
        <Route
            path="/CoursesHavingFocusOnEmployability"
            element={[<Nav_Bar/>, <Side_Nav/>,<CoursesHavingFocusOnEmployability/> ,<Footer/>]}
          />
        <Route
            path="/NewCoursesIntroduced"
            element={[<Nav_Bar/>, <Side_Nav/>,<NewCoursesIntroduced/> ,<Footer/>]}
          />
          <Route
            path="/ElectiveCourseSyste"
            element={[<Nav_Bar/>, <Side_Nav/>,<ElectiveCourseSyste/> ,<Footer/>]}
          />
          <Route
            path="/CrossCuttingIssues"
            element={[<Nav_Bar/>, <Side_Nav/>,<CrossCuttingIssues/> ,<Footer/>]}
          />

             <Route
            path="/ValueAddedCoursesOfferedBy"
            element={[<Nav_Bar/>, <Side_Nav/>,<ValueAddedCoursesOfferedBy/> ,<Footer/>]}
          />
           <Route
            path="/StudentsEnrolledInValueAddedCourses"
            element={[<Nav_Bar/>, <Side_Nav/>,<StudentsEnrolledInValueAddedCourses/> ,<Footer/>]}
          />
           <Route
            path="/StudentUndertakingFieldProjectsInternshipsStudentProjects"
            element={[<Nav_Bar/>, <Side_Nav/> , <StudentUndertakingFieldProjectsInternshipsStudentProjects/> ,<Footer/>]}
          />
         <Route
            path="/STRUCTURED_FEEDBACK_FOR_DESIGN_AND_REVIEW_OF_SYLLABUS"
            element={[<Nav_Bar/>, <Side_Nav/> , <STRUCTURED_FEEDBACK_FOR_DESIGN_AND_REVIEW_OF_SYLLABUS/> ,<Footer/>]}
          />
          <Route
            path="/FEEDBACK_ANALYSIS"
            element={[<Nav_Bar/>, <Side_Nav/> , <FEEDBACK_ANALYSIS/> ,<Footer/>]}
          />
            <Route
            path="/AVERAGE_ENROLMENT_PERCENTAGE"
            element={[<Nav_Bar/>, <Side_Nav/> , <AVERAGE_ENROLMENT_PERCENTAGE/> ,<Footer/>]}
          />
            <Route
            path="/AVERAGE_PERCENTAGE_OF_SEATS_FILLED_AGAINST_RESERVED_CATEGORIES"
            element={[<Nav_Bar/>, <Side_Nav/> , <AVERAGE_PERCENTAGE_OF_SEATS_FILLED_AGAINST_RESERVED_CATEGORIES/> ,<Footer/>]}
          />
          <Route
            path="/LEARNING_LEVELS_OF_THE_STUDENTS_AND_SPECIAL_PROGRAMMES_ORGANIZED"
            element={[<Nav_Bar/>, <Side_Nav/> , <LEARNING_LEVELS_OF_THE_STUDENTS_AND_SPECIAL_PROGRAMMES_ORGANIZED/> ,<Footer/>]}
          />
           <Route
            path="/STUDENT_FULL_TIME_TEACHER_RATIO"
            element={[<Nav_Bar/>, <Side_Nav/> , <STUDENT_FULL_TIME_TEACHER_RATIO/> ,<Footer/>]}
          />
          <Route
            path="/STUDENT_CENTRIC_METHODS"
            element={[<Nav_Bar/>, <Side_Nav/> , <STUDENT_CENTRIC_METHODS/> ,<Footer/>]}
          />
          <Route
            path="/ICT_ENABLED_TOOLS_FOR_EFFECTIVE_TEACHING_AND_LEARNING_PROCESS"
            element={[<Nav_Bar/>, <Side_Nav/> , <ICT_ENABLED_TOOLS_FOR_EFFECTIVE_TEACHING_AND_LEARNING_PROCESS/> ,<Footer/>]}
          />
          <Route
            path="/RATIO_OF_STUDENTS_TO_MENTOR"
            element={[<Nav_Bar/>, <Side_Nav/> , <RATIO_OF_STUDENTS_TO_MENTOR/> ,<Footer/>]}
          />
           <Route
            path="/PREPARATION_AND_ADHERENCE_OF_ACADEMIC_CALENDAR_AND_TEACHING_PLANS"
            element={[<Nav_Bar/>, <Side_Nav/> , <PREPARATION_AND_ADHERENCE_OF_ACADEMIC_CALENDAR_AND_TEACHING_PLANS/> ,<Footer/>]}
          />
           <Route
            path="/FULL_TIME_TEACHERS_AGAINST_SANCTIONED_POSTS"
            element={[<Nav_Bar/>, <Side_Nav/> , <FULL_TIME_TEACHERS_AGAINST_SANCTIONED_POSTS  /> ,<Footer/>]}
          />
          <Route
            path="/FULL_TIME_TEACHERS_WITH_PHD"
            element={[<Nav_Bar/>, <Side_Nav/>, <FULL_TIME_TEACHERS_WITH_PHD/> ,<Footer/>]}
          />

          <Route
            path="/EXPERIENCE_OF_FULL_TIME_TEACHERS"
            element={[<Nav_Bar/>, <Side_Nav/> , <EXPERIENCE_OF_FULL_TIME_TEACHERS/> ,<Footer/>]}
          />
          <Route
            path="/DECLARATION_OF_RESULTS"
            element={[<Nav_Bar/>, <Side_Nav/> , <DECLARATION_OF_RESULTS/> ,<Footer/>]}
          />
           <Route
            path="/STUDENT_COMPLAINTS_GRIEVANCES"
            element={[<Nav_Bar/>, <Side_Nav/>, <STUDENT_COMPLAINTS_GRIEVANCES/>,<Footer/>]}
          />
          <Route
            path="/IT_INTEGRATION_AND_REFORMS"
            element={[<Nav_Bar/>, <Side_Nav/>, <IT_INTEGRATION_AND_REFORMS/>,<Footer/>]}
          />
          <Route
            path="/PO_PSO_CO"
            element={[<Nav_Bar/>, <Side_Nav/>, <PO_PSO_CO/>,<Footer/>]}
          />
          <Route
            path="/AttainmentOfOutcomes"
            element={[<Nav_Bar/>, <Side_Nav/>, <AttainmentOfOutcomes/>,<Footer/>]}
          />
          <Route
            path="/PassPercentageOfStudents"
            element={[<Nav_Bar/>, <Side_Nav/>, <PassPercentageOfStudents/>,<Footer/>]}
          />
          <Route
            path="/StudentSatisfactionSurvey"
            element={[<Nav_Bar/>, <Side_Nav/>, <StudentSatisfactionSurvey/>,<Footer/>]}
          />
           <Route
            path="/ResearchPromotionPolicy311"
            element={[<Nav_Bar/>, <Side_Nav/>, <ResearchPromotionPolicy311/>,<Footer/>]}
          />
           <Route
            path="/SeedMoney312"
            element={[<Nav_Bar/>, <Side_Nav/>, <SeedMoney312/>,<Footer/>]}
          />
           <Route
            path="/TeachersAwardedFellowship313"
            element={[<Nav_Bar/>, <Side_Nav/>, <TeachersAwardedFellowship313/>,<Footer/>]}
          />
           <Route
            path="/GrantsForResearchProjects321"
            element={[<Nav_Bar/>, <Side_Nav/>, <GrantsForResearchProjects321/>,<Footer/>]}
          />
           <Route
            path="/ResearchProjects322"
            element={[<Nav_Bar/>, <Side_Nav/>, <ResearchProjects322/>,<Footer/>]}
          />
           <Route
            path="/ResearchGuides323"
            element={[<Nav_Bar/>, <Side_Nav/>, <ResearchGuides323/>,<Footer/>]}
          />
          <Route
            path="/DepartmentsHavingResearchProjects324"
            element={[<Nav_Bar/>, <Side_Nav/>, <DepartmentsHavingResearchProjects324/>,<Footer/>]}
          />
          <Route
            path="/EcoSystemForInnovationCreationTransferOfKnowledge331"
            element={[<Nav_Bar/>, <Side_Nav/>, <EcoSystemForInnovationCreationTransferOfKnowledge331/>,<Footer/>]}
          />
          <Route
            path="/WorkshopsSeminarsOnResearchMethodologyIPREntrepreneurshipSkillDevelopment332"
            element={[<Nav_Bar/>, <Side_Nav/>, <WorkshopsSeminarsOnResearchMethodologyIPREntrepreneurshipSkillDevelopment332/>,<Footer/>]}
          />
          <Route
            path="/CodeOfEthics"
            element={[<Nav_Bar/>, <Side_Nav/>, <CodeOfEthics/>,<Footer/>]}
          />
          <Route
            path="/Registered"
            element={[<Nav_Bar/>, <Side_Nav/>, <Registered/>,<Footer/>]}
          />
          <Route
            path="/ResearchPapersInJournalsNotifiedOnWebsite"
            element={[<Nav_Bar/>, <Side_Nav/>, <ResearchPapersInJournalsNotifiedOnWebsite/>,<Footer/>]}
          />
          <Route
            path="/BooksAndChaptersInEditedvolumesBooksPublishedAndPapersinNationalInternationalConferenceProceedings"
            element={[<Nav_Bar/>, <Side_Nav/>, <BooksAndChaptersInEditedvolumesBooksPublishedAndPapersinNationalInternationalConferenceProceedings/>,<Footer/>]}
          />
          <Route
            path="/AverageCitationIndex"
            element={[<Nav_Bar/>, <Side_Nav/>, <AverageCitationIndex/>,<Footer/>]}
          />
          <Route
            path="/H_Index"
            element={[<Nav_Bar/>, <Side_Nav/>, <H_Index/>,<Footer/>]}
          />

          <Route
            path="/RevenueGeneratedFromConsultancyAndCorporateTraining"
            element={[<Nav_Bar/>, <Side_Nav/>, <RevenueGeneratedFromConsultancyAndCorporateTraining/>,<Footer/>]}
          />
          <Route
            path="/DevelopingFacilitiesTrainingTeachersAndStaffForUndertakingConsultancy"
            element={[<Nav_Bar/>, <Side_Nav/>, <DevelopingFacilitiesTrainingTeachersAndStaffForUndertakingConsultancy/>,<Footer/>]}
          />
          <Route
            path="/ExtensionActivitiesInNeighbourhoodCommunity"
            element={[<Nav_Bar/>, <Side_Nav/>, <ExtensionActivitiesInNeighbourhoodCommunity/>,<Footer/>]}
          />
          <Route
            path="/AwardAndRecognitions"
            element={[<Nav_Bar/>, <Side_Nav/>, <AwardAndRecognitions/>,<Footer/>]}
          />
          <Route
            path="/ExtensionAndOutreachProgrammeConductedByTheInstitution"
            element={[<Nav_Bar/>, <Side_Nav/>, <ExtensionAndOutreachProgrammeConductedByTheInstitution/>,<Footer/>]}
          />
           <Route
            path="/StudentsParticipation"
            element={[<Nav_Bar/>, <Side_Nav/>, <StudentsParticipation/>,<Footer/>]}
          />
          <Route
            path="/CollaborativeActivities"
            element={[<Nav_Bar/>, <Side_Nav/>, <CollaborativeActivities/>,<Footer/>]}
          />
          <Route
            path="/FunctionalMoUs"
            element={[<Nav_Bar/>, <Side_Nav/>, <FunctionalMoUs/>,<Footer/>]}
          />
          <Route
            path="/InfrastructureAndPhysicalFacilities"
            element={[<Nav_Bar/>, <Side_Nav/>, <InfrastructureAndPhysicalFacilities/>,<Footer/>]}
          />
          <Route
            path="/CulturalSportsAndGamesFacilities"
            element={[<Nav_Bar/>, <Side_Nav/>, <CulturalSportsAndGamesFacilities/>,<Footer/>]}
          />
          <Route
            path="/ICtEnabledClassroomAndSeminarHalls"
            element={[<Nav_Bar/>, <Side_Nav/>, <ICtEnabledClassroomAndSeminarHalls/>,<Footer/>]}
          />
          <Route
            path="/InfrastructureAugmentation"
            element={[<Nav_Bar/>, <Side_Nav/>, <InfrastructureAugmentation/>,<Footer/>]}
          />
          <Route
            path="/InfrastructureAndServicesOfLibrarySubscriptionAndMembershipDetailsAndLibraryUsage"
            element={[<Nav_Bar/>, <Side_Nav/>, <InfrastructureAndServicesOfLibrarySubscriptionAndMembershipDetailsAndLibraryUsage/>,<Footer/>]}
          />
          <Route
            path="/SubscriptionAndMembershipDetails"
            element={[<Nav_Bar/>, <Side_Nav/>, <SubscriptionAndMembershipDetails/>,<Footer/>]}
          />
          <Route
            path="/PurchaseOfBooksBooksSubscriptionToJournalsEJournals"
            element={[<Nav_Bar/>, <Side_Nav/>, <PurchaseOfBooksBooksSubscriptionToJournalsEJournals/>,<Footer/>]}
          />












          
          </Routes>
        </BrowserRouter>
    </>
    
  );
}

export default App;
