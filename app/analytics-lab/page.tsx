import type { Metadata } from 'next';
import LabClient from './LabClient';
export const metadata:Metadata={title:'Analytics Lab | Tanvi Kinkhabwala',description:'Explore data health, dataset relationships, and analysis readiness through an interactive analytics demonstration.'};
export default function AnalyticsLab(){return <LabClient/>;}
