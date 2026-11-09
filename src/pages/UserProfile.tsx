import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Calendar,
  Camera,
  Home,
  LogOut,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Plus,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TextField } from "@/components/forms/TextField";
import profilePhoto from "@/assets/images/profile.png";

const savedAddresses = [
  {
    id: "home",
    label: "Home",
    detail: "12 Adeola Street, Yaba, Lagos",
    icon: Home,
    primary: true,
  },
  {
    id: "work",
    label: "Work",
    detail: "3rd floor, 21 Marina Road, Lagos Island",
    icon: Building2,
    primary: false,
  },
];

export default function UserProfile() {
  const [profileData, setProfileData] = useState({
    fullName: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+234 803 000 0000",
    birthday: "15 January 1995",
  });

  const [newAddress, setNewAddress] = useState({ label: "", details: "" });
  const navigate = useNavigate();

  const details = [
    { label: "Full name", value: profileData.fullName, verified: false },
    { label: "Email address", value: profileData.email, verified: true },
    { label: "Phone number", value: profileData.phone, verified: false },
    { label: "Birthday", value: profileData.birthday, verified: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container-page max-w-[1000px] pt-8 sm:pt-10">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">Your profile</h1>
            <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-ink-muted">
              Your name, contact details and the addresses you order to most.
            </p>
          </div>
          <Button
            variant="outline"
            className="h-10 w-fit rounded-lg border-hairline font-semibold"
            onClick={() => navigate("/settings")}
          >
            Account settings
          </Button>
        </header>

        <div className="mt-6 flex flex-col gap-5">
          <section className="rounded-xl border border-hairline p-5 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative w-fit">
                <img
                  src={profilePhoto}
                  alt=""
                  aria-hidden="true"
                  className="size-20 rounded-full object-cover"
                  width={200}
                  height={200}
                />
                <button
                  type="button"
                  aria-label="Change profile photo"
                  className="absolute -right-1 -bottom-1 grid size-8 place-items-center rounded-full border border-hairline bg-background text-ink-muted shadow-soft transition-colors hover:text-ink"
                >
                  <Camera className="size-3.5" />
                </button>
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {profileData.fullName}
                </h2>
                <p className="mt-1 truncate text-sm text-ink-muted">{profileData.email}</p>
                <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-ink-muted">
                  <Calendar aria-hidden="true" className="size-3.5" />
                  Joined March 2023
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-10 rounded-lg border-hairline font-semibold"
                    >
                      Edit profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-xl sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-display text-lg">Edit profile</DialogTitle>
                      <DialogDescription className="text-sm leading-relaxed text-ink-muted">
                        Changes appear on your orders and on any reviews you leave.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col gap-4 py-1">
                      <TextField
                        id="profile-name"
                        label="Full name"
                        icon={User}
                        value={profileData.fullName}
                        onChange={(value) => setProfileData({ ...profileData, fullName: value })}
                      />
                      <TextField
                        id="profile-email"
                        label="Email address"
                        icon={Mail}
                        type="email"
                        value={profileData.email}
                        onChange={(value) => setProfileData({ ...profileData, email: value })}
                      />
                      <div className="grid gap-4 sm:grid-cols-2">
                        <TextField
                          id="profile-phone"
                          label="Phone"
                          icon={Phone}
                          type="tel"
                          value={profileData.phone}
                          onChange={(value) => setProfileData({ ...profileData, phone: value })}
                        />
                        <TextField
                          id="profile-birthday"
                          label="Birthday"
                          icon={Calendar}
                          value={profileData.birthday}
                          onChange={(value) => setProfileData({ ...profileData, birthday: value })}
                        />
                      </div>
                    </div>

                    <DialogClose asChild>
                      <Button className="h-11 w-full rounded-lg font-semibold">Save changes</Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>

                <Button
                  variant="ghost"
                  className="h-10 rounded-lg font-semibold text-destructive hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => navigate("/login")}
                >
                  <LogOut aria-hidden="true" className="size-4" />
                  Sign out
                </Button>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-hairline p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-lg font-semibold text-ink">Personal details</h2>
              <Button
                variant="ghost"
                className="h-8 rounded-md px-2 text-[13px] font-semibold text-primary hover:bg-primary/10 hover:text-primary"
                onClick={() => navigate("/settings")}
              >
                Manage privacy
              </Button>
            </div>

            <dl className="mt-4 grid border-t border-hairline sm:grid-cols-2 sm:gap-x-10">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-col gap-1 border-b border-hairline py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <dt className="text-[13px] text-ink-muted">{detail.label}</dt>
                  <dd className="flex items-center gap-1.5 text-[15px] font-semibold text-ink sm:text-right">
                    {detail.value}
                    {detail.verified ? (
                      <span className="rounded-sm bg-emerald-50 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                        Verified
                      </span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="rounded-xl border border-hairline p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-lg font-semibold text-ink">Saved addresses</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-8 rounded-md px-2 text-[13px] font-semibold text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Plus aria-hidden="true" className="size-4" />
                    Add address
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-xl sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-display text-lg">Add an address</DialogTitle>
                    <DialogDescription className="text-sm leading-relaxed text-ink-muted">
                      Saved addresses appear at checkout so you do not retype them.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="flex flex-col gap-4 py-1">
                    <TextField
                      id="address-label"
                      label="Label"
                      icon={MapPin}
                      placeholder="e.g. Home, Work, Mum's place"
                      value={newAddress.label}
                      onChange={(value) => setNewAddress({ ...newAddress, label: value })}
                    />
                    <TextField
                      id="address-details"
                      label="Full address"
                      icon={Building2}
                      placeholder="Street, area and any delivery note"
                      value={newAddress.details}
                      onChange={(value) => setNewAddress({ ...newAddress, details: value })}
                    />
                  </div>

                  <DialogClose asChild>
                    <Button className="h-11 w-full rounded-lg font-semibold">
                      Add address
                      <MoveRight aria-hidden="true" className="size-4" />
                    </Button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {savedAddresses.map((address) => (
                <div
                  key={address.id}
                  className="rounded-lg border border-hairline p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-md bg-surface text-ink-muted">
                      <address.icon aria-hidden="true" className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[15px] font-semibold text-ink">{address.label}</h3>
                        {address.primary ? (
                          <span className="rounded-sm bg-primary/10 px-1.5 py-0.5 text-[11px] font-semibold text-primary">
                            Primary
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">
                        {address.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
