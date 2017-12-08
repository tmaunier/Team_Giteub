##perl
##return suite
##3
##../img/perl4_fibo.png
##1

sub fibonacci {
  my $l = shift;
  $l < 3 ? 1 : fibonacci($l-1) + fibonacci($l-2)
}

foreach (1..16) {
  print fibonacci($_), ", ";
}
print "..."
