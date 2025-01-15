import React from 'react';
import { Bell } from 'lucide-react';

export default function RightPanel() {
  return (
    <div className="bg-gray-50 p-4 space-y-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Notifications</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-blue-500 mr-2" />
            <p className="text-sm">New message received</p>
          </div>
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-blue-500 mr-2" />
            <p className="text-sm">System update available</p>
          </div>
        </div>
      </div>
    </div>
  );
}