const employees = [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "name": "Employee1",
        "tasks": [
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Prepare Report",
            "taskDescription": "Compile the quarterly sales data.",
            "taskDate": "2025-01-10",
            "taskCategory": "Reporting"
          },
          {
            "active": false,
            "completed": true,
            "new_task": false,
            "failed": false,
            "taskTitle": "Organize Team Building",
            "taskDescription": "Plan activities for team engagement.",
            "taskDate": "2025-01-18",
            "taskCategory": "HR"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Monitor Expenses",
            "taskDescription": "Track department expenses for Q1.",
            "taskDate": "2025-01-12",
            "taskCategory": "Finance"
          },
          {
            "active": false,
            "completed": false,
            "new_task": true,
            "failed": false,
            "taskTitle": "Prepare Presentation",
            "taskDescription": "Create a deck for the board meeting.",
            "taskDate": "2025-01-20",
            "taskCategory": "Management"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Update Policy Document",
            "taskDescription": "Revise company policy document.",
            "taskDate": "2025-01-15",
            "taskCategory": "HR"
          },
          {
            "active": false,
            "completed": false,
            "new_task": true,
            "failed": false,
            "taskTitle": "Quarterly Sales Analysis",
            "taskDescription": "Analyze sales performance for the last quarter.",
            "taskDate": "2025-01-22",
            "taskCategory": "Sales"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Plan Recruitment Drive",
            "taskDescription": "Schedule and organize the recruitment process.",
            "taskDate": "2025-01-30",
            "taskCategory": "HR"
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "name": "Employee2",
        "tasks": [
          {
            "active": false,
            "completed": true,
            "new_task": false,
            "failed": false,
            "taskTitle": "System Maintenance",
            "taskDescription": "Ensure all systems are updated.",
            "taskDate": "2025-01-05",
            "taskCategory": "IT"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Monitor Network",
            "taskDescription": "Monitor network performance for irregularities.",
            "taskDate": "2025-01-08",
            "taskCategory": "Networking"
          },
          {
            "active": false,
            "completed": false,
            "new_task": true,
            "failed": false,
            "taskTitle": "Prepare Audit Report",
            "taskDescription": "Assist in internal audit preparations.",
            "taskDate": "2025-01-15",
            "taskCategory": "Audit"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Database Backup",
            "taskDescription": "Perform a full backup of all company databases.",
            "taskDate": "2025-01-14",
            "taskCategory": "IT"
          },
          {
            "active": false,
            "completed": false,
            "new_task": true,
            "failed": false,
            "taskTitle": "Troubleshoot Hardware",
            "taskDescription": "Resolve issues with employee devices.",
            "taskDate": "2025-01-16",
            "taskCategory": "Support"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Upgrade Software",
            "taskDescription": "Update company software to the latest versions.",
            "taskDate": "2025-01-12",
            "taskCategory": "IT"
          },
          {
            "active": false,
            "completed": false,
            "new_task": true,
            "failed": false,
            "taskTitle": "Cybersecurity Audit",
            "taskDescription": "Conduct a cybersecurity audit.",
            "taskDate": "2025-01-18",
            "taskCategory": "IT"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Manage Cloud Infrastructure",
            "taskDescription": "Optimize cloud storage and services.",
            "taskDate": "2025-01-20",
            "taskCategory": "IT"
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "name": "Employee3",
        "tasks": [
          {
            "active": false,
            "completed": false,
            "new_task": true,
            "failed": false,
            "taskTitle": "Client Presentation",
            "taskDescription": "Prepare a presentation for the new client.",
            "taskDate": "2025-01-15",
            "taskCategory": "Marketing"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Develop Campaign",
            "taskDescription": "Work on the upcoming marketing campaign.",
            "taskDate": "2025-01-20",
            "taskCategory": "Marketing"
          },
          {
            "active": false,
            "completed": false,
            "new_task": false,
            "failed": true,
            "taskTitle": "Market Analysis",
            "taskDescription": "Analyze market trends for Q1.",
            "taskDate": "2025-01-10",
            "taskCategory": "Analysis"
          },
          {
            "active": false,
            "completed": true,
            "new_task": false,
            "failed": false,
            "taskTitle": "Social Media Engagement",
            "taskDescription": "Improve social media reach.",
            "taskDate": "2025-01-09",
            "taskCategory": "Social Media"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Customer Feedback Analysis",
            "taskDescription": "Evaluate feedback to improve campaigns.",
            "taskDate": "2025-01-18",
            "taskCategory": "Customer Relations"
          },
          {
            "active": false,
            "completed": false,
            "new_task": true,
            "failed": false,
            "taskTitle": "Prepare Newsletter",
            "taskDescription": "Draft the monthly company newsletter.",
            "taskDate": "2025-01-25",
            "taskCategory": "Communication"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Lead Generation",
            "taskDescription": "Identify potential clients for outreach.",
            "taskDate": "2025-01-28",
            "taskCategory": "Marketing"
          },
          {
            "active": false,
            "completed": true,
            "new_task": false,
            "failed": false,
            "taskTitle": "Email Campaign",
            "taskDescription": "Set up and run email campaigns.",
            "taskDate": "2025-01-19",
            "taskCategory": "Marketing"
          },
          {
            "active": false,
            "completed": false,
            "new_task": false,
            "failed": true,
            "taskTitle": "Competitor Analysis",
            "taskDescription": "Analyze competitors' strategies.",
            "taskDate": "2025-01-13",
            "taskCategory": "Analysis"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Content Writing",
            "taskDescription": "Draft content for the new blog.",
            "taskDate": "2025-01-31",
            "taskCategory": "Content"
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "name": "Employee4",
        "tasks": [
          {
            "active": false,
            "completed": false,
            "new_task": false,
            "failed": true,
            "taskTitle": "Project Analysis",
            "taskDescription": "Analyze project delays and prepare recommendations.",
            "taskDate": "2024-12-20",
            "taskCategory": "Analysis"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Resolve Bugs",
            "taskDescription": "Fix bugs reported in the recent software update.",
            "taskDate": "2025-01-11",
            "taskCategory": "Development"
          },
          {
            "active": false,
            "completed": false,
            "new_task": true,
            "failed": false,
            "taskTitle": "Code Review",
            "taskDescription": "Review code submitted by team members.",
            "taskDate": "2025-01-14",
            "taskCategory": "Development"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Feature Design",
            "taskDescription": "Design features for the new product.",
            "taskDate": "2025-01-22",
            "taskCategory": "Development"
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "name": "Employee5",
        "tasks": [
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Inventory Check",
            "taskDescription": "Audit the inventory and document discrepancies.",
            "taskDate": "2025-01-12",
            "taskCategory": "Operations"
          },
          {
            "active": false,
            "completed": true,
            "new_task": false,
            "failed": false,
            "taskTitle": "Procurement Plan",
            "taskDescription": "Develop a procurement plan for Q1.",
            "taskDate": "2025-01-01",
            "taskCategory": "Procurement"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Supplier Meeting",
            "taskDescription": "Meet with suppliers to discuss upcoming orders.",
            "taskDate": "2025-01-15",
            "taskCategory": "Logistics"
          },
          {
            "active": true,
            "completed": false,
            "new_task": false,
            "failed": false,
            "taskTitle": "Stock Verification",
            "taskDescription": "Check stock levels for accuracy.",
            "taskDate": "2025-01-18",
            "taskCategory": "Inventory"
          },
          {
            "active": false,
            "completed": true,
            "new_task": false,
            "failed": false,
            "taskTitle": "Order Review",
            "taskDescription": "Review supplier orders for discrepancies.",
            "taskDate": "2025-01-17",
            "taskCategory": "Logistics"
          },
          {
            "active": false,
            "completed": false,
            "new_task": true,
            "failed": false,
            "taskTitle": "Monthly Budget",
            "taskDescription": "Prepare the budget for next month.",
            "taskDate": "2025-01-29",
            "taskCategory": "Finance"
          }
        ]
      }
    ]
  
const admins = [
      {
        "id": 1,
        "email": "admin1@example.com",
        "password": "123",
        "name": "Admin1",
      }
    ]

export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admins',JSON.stringify(admins))
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admins = JSON.parse(localStorage.getItem('admins')) 

    return {employees,admins}
}

  