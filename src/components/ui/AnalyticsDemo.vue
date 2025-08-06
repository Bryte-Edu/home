<template>
  <div class="w-full max-w-6xl mx-auto">
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      <StatCard>
        <template #value>4.8/5.0</template>
        <template #label>Learning Satisfaction</template>
        <template #extra>
          <div class="flex items-center text-green-600">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            +0.3 this month
          </div>
        </template>
      </StatCard>

      <StatCard>
        <template #value>89%</template>
        <template #label>Course Completion Rate</template>
        <template #extra>
          <div class="flex items-center text-green-600">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            +12% from last quarter
          </div>
        </template>
      </StatCard>

      <StatCard>
        <template #value>2.4h</template>
        <template #label>Avg. Daily Study Time</template>
        <template #extra>
          <div class="flex items-center text-blue-600">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              />
            </svg>
            Optimal range achieved
          </div>
        </template>
      </StatCard>

      <StatCard>
        <template #value>94%</template>
        <template #label>Knowledge Retention</template>
        <template #extra>
          <div class="flex items-center text-purple-600">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Above average
          </div>
        </template>
      </StatCard>
    </div>

    <!-- Interactive Charts Demo -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Progress Chart -->
      <div class="feature-card">
        <h3 class="text-xl font-semibold mb-6 text-foreground">
          Learning Progress
        </h3>
        <div class="space-y-5">
          <div
            v-for="subject in subjects"
            :key="subject.name"
            class="space-y-2"
          >
            <div class="flex justify-between items-center">
              <span class="text-sm font-medium text-muted-foreground">{{
                subject.name
              }}</span>
              <span class="text-sm text-foreground font-semibold">{{
                  subject.progress
                }}%</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
              <div
                class="h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                :class="subject.color"
                :style="{ width: `${subject.progress}%` }"
              >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity Heatmap -->
      <div class="feature-card">
        <h3 class="text-xl font-semibold mb-6 text-foreground">
          Study Activity Heatmap
        </h3>
        <div class="space-y-3">
          <!-- Day labels -->
          <div class="grid grid-cols-[50px_repeat(12,0.2fr)] gap-1 text-xs text-muted-foreground">
            <div></div>
            <div
              v-for="week in new Array(7).fill(0).map((_, i) =>
                i + new Date().getMonth()
              )"
              :key="week"
              class="text-center"
            >
              {{
                week === 1
                ? "Jan"
                : week === 4
                ? "Feb"
                : week === 8
                ? "Mar"
                : week === 12
                ? "Apr"
                : ""
              }}
            </div>
          </div>

          <!-- Heatmap grid -->
          <div
            v-for="(dayName, dayIndex) in weekLabels"
            :key="dayName"
            class="grid grid-cols-[60px_repeat(12,0.5fr)] gap-px items-center"
          >
            <div class="text-xs text-muted-foreground text-right pr-4">
              {{ dayName }}
            </div>
            <div
              v-for="week in 12"
              :key="`${dayIndex}-${week}`"
              class="flex gap-px"
            >
              <div
                v-for="day in heatmapData.filter(d =>
                  d.dayOfWeek === dayIndex
                  && Math.floor(d.id / 7) === week - 1
                ).slice(0, 1)"
                :key="day.id"
                class="w-4 h-4 rounded-sm transition-all duration-300 hover:scale-150 cursor-pointer hover:shadow-md"
                :class="day.intensity"
                :title="`${day.date}: ${
                  day.hours.toPrecision(2)
                }h studied`"
              >
              </div>
            </div>
          </div>
        </div>

        <!-- Legend -->
        <div class="flex items-center justify-between mt-6 text-xs text-muted-foreground">
          <span>Less</span>
          <div class="flex items-center space-x-2">
            <div class="flex space-x-1">
              <div class="w-4 h-4 rounded-sm bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              </div>
              <div class="w-4 h-4 rounded-sm bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800">
              </div>
              <div class="w-4 h-4 rounded-sm bg-emerald-200 dark:bg-emerald-800/50 border border-emerald-300 dark:border-emerald-700">
              </div>
              <div class="w-4 h-4 rounded-sm bg-emerald-300 dark:bg-emerald-700/70 border border-emerald-400 dark:border-emerald-600">
              </div>
              <div class="w-4 h-4 rounded-sm bg-emerald-400 dark:bg-emerald-600 border border-emerald-500 dark:border-emerald-500">
              </div>
            </div>
          </div>
          <span>More</span>
        </div>

        <!-- Summary stats -->
        <div class="mt-4 pt-4 border-t border-border">
          <div class="grid grid-cols-3 gap-4 text-center">
            <div>
              <div class="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                {{
                  heatmapData.filter(d =>
                    parseFloat(d.hours.toFixed(2)) > 0
                  ).length
                }}
              </div>
              <div class="text-xs text-muted-foreground">Active Days</div>
            </div>
            <div>
              <div class="text-lg font-bold text-blue-600 dark:text-blue-400">
                {{
                  Math.round(heatmapData.reduce((sum, d) =>
                  sum + parseFloat(d.hours.toFixed(2)), 0))
                }}
              </div>
              <div class="text-xs text-muted-foreground">Total Hours</div>
            </div>
            <div>
              <div class="text-lg font-bold text-purple-600 dark:text-purple-400">
                {{
                  Math.round(
                    heatmapData.filter(d =>
                      parseFloat(d.hours.toFixed(2)) >= 2
                    ).length / heatmapData.filter(d =>
                      parseFloat(d.hours.toFixed(2)) > 0
                    ).length * 100,
                  ) || 0
                }}%
              </div>
              <div class="text-xs text-muted-foreground">Quality Sessions</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Achievement Badges -->
    <div class="mt-12">
      <h3 class="text-2xl font-semibold mb-6 text-center text-foreground">
        Recent Achievements
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="achievement in achievements"
          :key="achievement.name"
          class="feature-card text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <div class="text-3xl mb-2">{{ achievement.icon }}</div>
          <h4 class="font-semibold text-sm text-foreground">
            {{ achievement.name }}
          </h4>
          <p class="text-xs text-muted-foreground mt-1">
            {{ achievement.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Demo Note -->
    <div class="mt-8 text-center">
      <div class="glass-effect inline-flex items-center space-x-2 px-6 py-3 rounded-2xl shadow-professional-md">
        <svg
          class="w-5 h-5 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-sm text-foreground font-medium">
          Interactive dashboard with real-time insights and AI-powered
          recommendations
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StatCard from "./StatCard.vue";

const subjects = [
  {
    name: "Mathematics",
    progress: 92,
    color: "bg-gradient-to-r from-blue-500 to-blue-800",
  },
  {
    name: "Computer Science",
    progress: 87,
    color: "bg-gradient-to-r from-emerald-500 to-emerald-800",
  },
  {
    name: "Physics",
    progress: 78,
    color: "bg-gradient-to-r from-purple-500 to-purple-800",
  },
  {
    name: "Chemistry",
    progress: 85,
    color: "bg-gradient-to-r from-orange-500 to-orange-800",
  },
  {
    name: "Literature",
    progress: 94,
    color: "bg-gradient-to-r from-pink-500 to-pink-800",
  },
  {
    name: "History",
    progress: 82,
    color: "bg-gradient-to-r from-indigo-500 to-indigo-800",
  },
];

const achievements = [
  {
    name: "Fast Learner",
    icon: "⚡",
    description: "Completed 5 courses in a week",
  },
  {
    name: "Perfect Score",
    icon: "🎯",
    description: "Achieved 100% on final exam",
  },
  { name: "Consistent", icon: "📅", description: "30-day learning streak" },
  { name: "Helper", icon: "🤝", description: "Helped 10 fellow students" },
];
// Generate more realistic heatmap data for 12 weeks (84 days)
const generateHeatmapData = () => {
  const data = [];
  const today = new Date();

  for (let i = 83; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    // Create more realistic patterns
    let intensity = 0;
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    // Add randomness: simulate random "focus weeks" and "lazy days"
    const focusWeek = Math.random() > 0.95;
    const lazyDay = Math.random() > 0.97;

    // Higher activity on weekdays, lower on weekends
    if (isWeekend) {
      intensity = Math.random() > 0.7 ? Math.floor(Math.random() * 3) : 0;
    } else {
      // Weekday pattern - more likely to study
      const rand = Math.random();
      if (focusWeek) {
        intensity = Math.floor(Math.random() * 2) + 3; // 3 or 4
      } else if (lazyDay) {
        intensity = 0;
      } else if (rand > 0.8) intensity = 4; // High activity
      else if (rand > 0.5) intensity = 3; // Medium-high activity
      else if (rand > 0.3) intensity = 2; // Medium activity
      else if (rand > 0.1) intensity = 1; // Low activity
      else intensity = 0; // No activity
    }

    // Reduce activity randomly to simulate breaks/vacations
    if (Math.random() > 0.85) intensity = 0;

    const intensityClasses = [
      "bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
      "bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800",
      "bg-emerald-200 dark:bg-emerald-800/50 border border-emerald-300 dark:border-emerald-700",
      "bg-emerald-300 dark:bg-emerald-700/70 border border-emerald-400 dark:border-emerald-600",
      "bg-emerald-400 dark:bg-emerald-600 border border-emerald-500 dark:border-emerald-500",
    ];

    // Add more randomness to hours
    let hours = 0;
    if (intensity === 0) {
      hours = Math.random() > 0.95 ? (Math.random() * 0.5) : 0;
    } else {
      hours = intensity * 0.5 + Math.random() * 1.5
        + (focusWeek ? Math.random() * 1 : 0);
    }

    data.push({
      id: i,
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      hours: hours,
      intensity: intensityClasses[intensity],
      dayOfWeek: dayOfWeek,
    });
  }

  return data;
};

const heatmapData = generateHeatmapData();

// Generate weekly labels
const weekLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
</script>
