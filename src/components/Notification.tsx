import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearhBar";
import { Bell } from "lucide-react";
import Girl from "../assets/81.png";
import Vector from "../assets/Vector (5).png";
import { NotificationData } from "../components/data/NotificationData";

interface NotificationItem {
  id: number;
  image: string;
  name: string;
  statement: string;
  hour: string;
  isRead?: boolean;
}

const Notification: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [notifications, setNotifications] = useState<NotificationItem[]>(NotificationData);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch = notification.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.statement.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === "unread") return matchesSearch && !notification.isRead;
    return matchesSearch;
  });

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        isRead: true,
      }))
    );
  };

  const handleAccept = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
    alert(`Notification ${id} accepted!`);
  };

  const handleDecline = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
    alert(`Notification ${id} declined!`);
  };

  const unreadCount = notifications.filter((notification) => !notification.isRead).length;

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
       

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 md:p-6 rounded-lg shadow-md gap-4 md:gap-0">
            <SearchBar onSearch={(query) => setSearchQuery(query)} />
            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative">
                <Bell size={24} className="text-gray-600 cursor-pointer" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <img src={Girl} className="w-10 h-10 rounded-full" alt="Profile" />
                <div className="flex flex-col">
                  <h1 className="text-lg font-semibold">Adanna Ogude</h1>
                  <h3 className="text-sm text-gray-500">adannaogude@gmail.com</h3>
                </div>
              </div>
              <img src={Vector} className="h-4 cursor-pointer" alt="Dropdown" />
            </div>
          </div>

          {/* Notifications Section */}
          <div className="mt-6 md:mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              <h1 className="text-2xl font-semibold">Notifications</h1>
              <p className="text-blue-600 underline cursor-pointer" onClick={markAllAsRead}>
                Mark all as read
              </p>
            </div>

            {/* Notification Filters */}
            <div className="flex flex-wrap gap-4 md:gap-6 mt-4 md:mt-6">
              <button
                onClick={() => setFilter("all")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  filter === "all" ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
                }`}
              >
                All <span className="bg-white text-gray-900 px-2 py-1 rounded-full text-sm">8</span>
              </button>
              <button
                onClick={() => setFilter("unread")}
                className={`px-4 py-2 rounded-lg ${
                  filter === "unread" ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
                }`}
              >
                Unread
              </button>
            </div>

            {/* Notification List */}
            <div className="mt-6 md:mt-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              ) : filteredNotifications.length === 0 ? (
                <div className="text-center text-gray-600 py-6">No notifications found.</div>
              ) : (
                filteredNotifications.map((notification, index) => (
                  <div key={notification.id} className="flex flex-col gap-4 p-4 hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <img
                        src={notification.image}
                        alt={notification.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">
                          {notification.name}
                        </p>
                        <p className="text-sm text-gray-600">{notification.statement}</p>
                        <p className="text-xs text-gray-500">{notification.hour}</p>
                      </div>
                    </div>
                    {index >= notifications.length - 3 && (
                      <div className="flex gap-4 md:gap-5 pl-14">
                        <button
                          onClick={() => handleAccept(notification.id)}
                          className="px-4 py-2 bg-black text-white rounded-lg"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleDecline(notification.id)}
                          className="px-4 py-2 bg-white text-black border border-gray-300 rounded-lg"
                        >
                          Decline
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;